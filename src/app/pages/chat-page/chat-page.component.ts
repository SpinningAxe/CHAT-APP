import { Component } from '@angular/core';
import { chatUser } from 'src/app/models/chatUser.model';
import { chatMessage } from 'src/app/models/chatMessage.model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
})
export class ChatPageComponent {
  constructor() {
    this.chatLogForDisplay = [];
    this.chatLogDisplay()
  }
  user = 'Việt';
  chatUserList = [
    {
      username: 'Nguyễn Mạnh Duy',
      image:
        'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      lastMessage: "that's crazy",
      sendTo: 'Việt',
      chatLog: [
        {
          from: 'Việt',
          message: 'Hello',
          time: Date.now(),
        },
        {
          from: 'Nguyễn Mạnh Duy',
          message: 'Good afternoon',
          time: Date.now(),
        },
        {
          from: 'Việt',
          message:
            'Did i ever tell you what the definition of insanity is? Insanity, is doing the exact same fucking thing over and over again, expecting shit to change. That is crazy',
          time: Date.now(),
        },
        {
          from: 'Việt',
          message:
            "First time somebody told me that, i don't know i thought he was bullshitng me so, boom. I shot him. The thing is, he was right. And then i started to see it everywhere i looked, everywhere i looked, all these fucking pricks, everywhere i looked, doing the exact same thing over and over and over and over and over again. Thinking 'this time, it's gonna be different'.",
          time: Date.now(),
        },
        {
          from: 'Nguyễn Mạnh Duy',
          message: "That's crazy",
          time: Date.now(),
        },
      ],
    },
    {
      username: 'Draven',
      image:
        'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      lastMessage: 'you owe me money',
      sendTo: 'Việt',
      chatLog: [
        {
          from: "Việt",
          message: 'Good morning Draven',
          time: Date.now(),
        },
        {
          from: "Draven",
          message: 'Good morning too, Draven',
          time: Date.now(),
        },
        {
          from: "Draven",
          message:
            'Wanna throw some axe at some bitches later?',
          time: Date.now(),
        },
        {
          from: "Việt",
          message:
            "Yeah sure",
          time: Date.now(),
        },
        {
          from: "Draven",
          message: "You still owe me money",
          time: Date.now(),
        },
      ]
    },
    {
      username: 'Joe Biden',
      image:
        'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
      lastMessage: 'heil Hitler',
      sendTo: 'Việt',
      chatLog:[
        {
          from: "Việt",
          message: 'Good morning mr.President',
          time: Date.now(),
        },
        {
          from: "Joe Biden",
          message: 'Good morning, Draven',
          time: Date.now(),
        },
        {
          from: "Việt",
          message:
            'Heil Hitler',
          time: Date.now(),
        },
        {
          from: "Joe Biden",
          message:
            "Heil Hitler",
          time: Date.now(),
        },
      ],
    },
  ];

  activeChatUser = this.chatUserList[0];
  public messageInput = 'TESTING';

  setActive(chatUser: any) {
    let index = this.chatUserList.indexOf(chatUser);
    this.activeChatUser = this.chatUserList[index];
    this.chatLogForDisplay = [];
    this.chatLogDisplay()
  }

  chatLogForDisplay: any = [];

  chatLogDisplay() {
    for (let i = 0; i < this.activeChatUser.chatLog.length; i++) {
      let newMessage = {
        fromUser: false,
        message: '',
        time: Date.now(),
        lastMessage: false,
      };
      if (this.activeChatUser.chatLog[i].from != this.user) {
        newMessage.fromUser = false;
      } else {
        newMessage.fromUser = true;
      }

      if (i != this.activeChatUser.chatLog.length-1) {
        if (
          this.activeChatUser.chatLog[i].from ==
          this.activeChatUser.chatLog[i + 1].from
        ) {
          newMessage.lastMessage = false;
        } else {
          newMessage.lastMessage = true;
        }
      }else{
        newMessage.lastMessage = true
      }

      newMessage.message = this.activeChatUser.chatLog[i].message;
      newMessage.time = this.activeChatUser.chatLog[i].time;
      this.chatLogForDisplay.push(newMessage);
    }
  }

  submit() {
    let newMessage = {
      from: this.user,
      fromUser: true,
      message: this.messageInput,
      time: Date.now(),
      lastMessage: true,
    };
    if (newMessage.message.trim() != '') {
      this.activeChatUser.chatLog.push(newMessage);
      this.chatLogForDisplay.push(newMessage);
    }
  }
}
