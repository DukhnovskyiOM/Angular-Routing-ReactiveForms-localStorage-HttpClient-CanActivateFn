export interface Users {
    username?: string | null;
    email?: string | null;
    password?: string | null;
}

export interface PostsData {
    userId?: number;
    id?: number;
    title?: string;
    body?: string;
  }