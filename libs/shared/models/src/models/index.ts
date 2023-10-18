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
  participants: { id: string; name?: string }[];
  minParticipants: number;
  maxParticipants: number;
  description: string;
  comments: {
    text: string;
    id: string;
    authorName: string;
    createdAt: string;
  }[];
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

export enum FriendStatus {
  Pending = 'pending',
  Confirmend = 'confirmed',
  Requested = 'requested',
  WaitingResponse = 'waitingresponse',
}

export interface Friendship {
  requester: string;
  recipient: string;
  status: FriendStatus;
}

export interface User {
  id: string;
  name: string;
  version: number;
  dateOfBirth?: string;
  gender?: string;
  address: string;
  friendships: Friendship[];
  location: { coordinates: [number, number] };
  description?: string;
  profileImg?: string;
}

export interface Slot {
  id: string;
  title?: string;
  address?: string;
  location?: { coordinates: [number, number] };
  startTime: [string];
  endTime: [string];
  user: string;
  rate?: number;
  description?: string;
}
