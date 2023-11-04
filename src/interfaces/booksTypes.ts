export interface BookData {
  kind: string;
  totalItems: number;
  items: Book[];
}

export interface BookCategory {
  id: string;
  title: string;
}

export interface Book {
  author: any;
  title: any;
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
}
interface VolumeInfo {
  title: string;
  subtitle: string;
  authors: string[];
  publishedDate: string;
  industryIdentifiers: {
    type: string;
    identifier: string;
  }[];
  readingModes: {
    text: boolean;
    image: boolean;
  };
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
}
