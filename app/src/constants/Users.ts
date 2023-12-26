import ProfileImg1 from '@/assets/images/img_profile_1.png';
import ProfileImg2 from '@/assets/images/img_profile_2.png';
import ProfileImg3 from '@/assets/images/img_profile_3.png';

class User {
  userName;
  profileImage;
  id;

  constructor(userName: string, profileImage: string, id:number) {
    this.userName = userName;
    this.profileImage = profileImage;
    this.id = id;
  }
}

export const USERS = {
  MIKE: new User('Mike', ProfileImg1, 1),
  SARA: new User('Sara', ProfileImg2, 2),
  DAVID: new User('David', ProfileImg3, 3),
}

export interface UserProfile {
  userName: string,
  profileImage: string,
  id: number,
}