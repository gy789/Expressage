package com.expressage.mapper;

import com.expressage.entity.Message;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MessageMapper {
    List<Message> getAllMessage(@Param("uid")int uid, @Param("type")int type);//得到所有留言信息（0:已读，1：未读）
    int getMessageNumber(@Param("uid")int uid, @Param("type")int type);//得到留言数量（0:已读，1：未读）
    int addMessage(Message message);//插入留言信息
    int updateMessage(String[] message_id);//修改留言信息读取状态
    int deleteMessage(String[] message_id);//删除留言信息
}
