export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  publishedAt: string;
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}

export interface CustomImageProps {
  img: string;
  alt: string;
  sizeStyle: string;
  roundedStyle?: string;
}

