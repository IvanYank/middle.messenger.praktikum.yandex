type chatType = {
  id: number;
  title: string;
  created_by: number;
  unread_count: number;
  last_message?: {
    user: {
      first_name: string,
      second_name: string,
      display_name?: string,
      avatar?: string,
    },
    time: string,
    content: string,
    id: number,
  };
  avatar?: string;
}

type messageType = {
  chat_id: number;
  content: string;
  id: number;
  is_read: boolean;
  time: string;
  type: string;
  user_id: number;
}

/* eslint-disable */
type Indexed<T = any> = {
  [key in string]: T;
};
/* eslint-enable */

export type { messageType, chatType, Indexed }
