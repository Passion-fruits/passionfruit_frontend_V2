export interface FeedCardProps {
  profile_url: string;
  cover_url: string;
  song_url: string;
  user_name: string;
  date: string;
  title: string;
  tag: string[];
  description: string;
  heart: string | number;
  comment: string | number;
  song_id: string | number;
  user_id: string | number;
}