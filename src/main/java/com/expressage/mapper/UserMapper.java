package com.expressage.mapper;

import com.expressage.entity.Users;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper {

    Users ulogin(@Param("username") String username, @Param("password") String password);
    int uregister(Users users);//注册
    List<Users> getAllUsers();//得到所有的用户
    int deleteUsers(int uid);//删除用户
    int updateUser(Users users);//修改用户信息
    Users getUsers(int uid);//得到用户详细信息
    int addUser(Users users);//添加用户
}
