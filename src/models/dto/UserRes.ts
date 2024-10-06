import { UserEntity } from "../User";

export class UserRes{
    UserName:string;
    Password:string;
    Name:string;
    
    toUserEntity(userRes:UserRes):UserEntity{
        let userEntity = new UserEntity();
        userEntity.UserName = userRes.UserName;
        userEntity.Password = userRes.Password;
        userEntity.FullName = userRes.Name;
        userEntity.CreatedAt = new Date();
        userEntity.UpdatedAt = new Date();
        return userEntity;
    }
    
}