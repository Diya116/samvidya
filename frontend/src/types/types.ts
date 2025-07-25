export interface Lesson {
    id: string;
    title: string;
    description: string;
    videoUrl: string;
    duration?: string;
  }
  
  export interface Course {
    title: string;
    description: string;
    image: File | null;
    imagePreview: string;
    lessons: Lesson[];
  }

  export interface YouTubeVideoDetails {
  title: string;
  description: string;
  duration: string; // e.g., "10:30"
}

  