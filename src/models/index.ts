export interface State {
  auth: {
    accessToken: string;
  };
}

export interface Comment {
  author: {
    id: string;
    name: string;
  };
  text: string;
  createdAt: Date;
}

export interface Post {
  id: string;
  text: string;
  author: {
    id: string;
    name: string;
  };
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
  likes: string[];
}

export interface Friendship {
  id: string;
  name: string;
  userId: string;
}

export interface FriendshipsResponse {
  waitingResponseFriendships: Friendship[];
  requestedFriendships: Friendship[];
  confirmedFriendships: Friendship[];
}

export interface Event {
  id: string;
  title: string;
  sport: string;
  address: string;
  timeStart: Date;
  timeEnd: Date;
  participants: { id: string }[];
  maxParticipants: number;
  description: string;
  comments: Comment[];
  author: string | { id: string; name: string };
  outdoor: boolean;
}

export enum Level {
  Beginner = 'beginner',
  Intermediate = 'intermediate',
  Advanced = 'advanced',
  Pro = 'pro',
}

export interface PartnerPost {
  id: string;
  title: string;
  description: string;
  address: string;
  sports: string[];
  author: {
    id: string;
    name: string;
  };
  createdAt?: string;
  labels: Level[];
}
