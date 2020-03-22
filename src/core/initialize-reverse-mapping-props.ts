import { mapInitialize } from '../member-functions/map-initialize';
import {
  BaseOf,
  Dict,
  MapFromFunction,
  Mapping,
  MappingProperty,
  MapWithFunction,
  Selector,
  TransformationType,
} from '../types';
import { getMemberPath, isThisMemberMap } from '../utils';
import { getProto } from '../utils/getProto';
import { instantiate } from './instantiate';

export function initializeReverseMappingProps<
  TSource extends Dict<TSource> = any,
  TDestination extends Dict<TDestination> = any,
  TBaseSource extends BaseOf<TSource, TBaseSource> = any,
  TBaseDestination extends BaseOf<TDestination, TBaseDestination> = any
>(
  mapping: Mapping<TSource, TDestination, TBaseSource, TBaseDestination>
): Array<
  [
    string,
    MappingProperty<TDestination, TSource, ReturnType<Selector<TSource>>>
  ]
> {
  const model = instantiate(mapping.models[0]);
  const proto = getProto(model);
  const reversedProps: Array<[
    string,
    MappingProperty<TDestination, TSource, ReturnType<Selector<TSource>>>
  ]> = [];

  let i = mapping.props.length;
  while (i--) {
    const { paths, transformation } = mapping.props[i][1];
    const [destPath, sourcePath] = paths;

    if (
      !sourcePath &&
      transformation.type !== TransformationType.MapFrom &&
      transformation.type !== TransformationType.MapWith
    ) {
      continue;
    }

    const path = sourcePath
      ? sourcePath
      : isThisMemberMap<MapWithFunction>(
          transformation.mapFn,
          TransformationType.MapWith
        )
      ? getMemberPath(transformation.mapFn.withValueSelector)
      : isThisMemberMap<MapFromFunction>(
          transformation.mapFn,
          TransformationType.MapFrom
        )
      ? getMemberPath(transformation.mapFn.fromSelector)
      : '';

    if (
      (!model.hasOwnProperty(path) && !proto.hasOwnProperty(path)) ||
      reversedProps.some(([propPath]) => propPath === path)
    ) {
      continue;
    }

    reversedProps.push([
      path,
      Object.seal({
        paths: [path, destPath],
        transformation: {
          type: TransformationType.MapInitialize,
          preCond: undefined,
          mapFn: mapInitialize(path),
        },
      }),
    ]);
  }

  return reversedProps;
}
