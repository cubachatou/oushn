import {
  SanityAsset,
  SanityImageObject,
  SanityImageSource,
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
  text: string;
  figcaption: string;
  title: string;
  credits: [{ role: string; name: string; type: string }];
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

export interface Work {
  name: string;
  currentSlug: string;
  image: SanityImageSource;
}

export interface Feedback {
  name: string;
  text: string;
  img: SanityImageSource;
}
