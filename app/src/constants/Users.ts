import ProfileImg1 from '@/assets/images/img_profile_1.png';
import ProfileImg2 from '@/assets/images/img_profile_2.png';
import ProfileImg3 from '@/assets/images/img_profile_3.png';

export type UserProfile = {
  userName: string;
  profileImage: string;
  id: number;
};

const createProfile = (userName: string, profileImage: string, id: number): UserProfile => ({
  userName,
  profileImage,
  id,
});

export const USERS = {
  MIKE: createProfile('Mike',ProfileImg1, 1),
  SARA: createProfile('Sara',ProfileImg2, 2),
  DAVID: createProfile('David',ProfileImg3, 3),
}