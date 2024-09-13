import {
  SanityAsset,
  SanityImageObject,
} from "@sanity/image-url/lib/types/types";
import { PortableTextTextBlock } from "sanity";

export interface ExtendedSanityImageObject extends SanityImageObject {
  alt: string;
  aspectRatio: string;
}

export interface muxAsset {
  playbackId: string;
  assetId: string;
  filename: string;
}

export interface ContentItem extends PortableTextTextBlock {
  _type: string;
  _key: string;
  mediaArray: ExtendedSanityImageObject[];
  asset: muxAsset;
  image: ExtendedSanityImageObject;
  video: {
    asset: muxAsset;
  };
}

export interface WorkContent {
  previewImg: SanityAsset;
  video: {
    asset: muxAsset;
  };
  content: ContentItem[];
  name: string;
  description: string;
}
