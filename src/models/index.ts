export interface State {
  auth: {
    accessToken: string;
  };
}

export interface Comment {
  id: string;
  text: string;
  author: string;
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
