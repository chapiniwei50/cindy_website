import React from 'react';
import { Box, Typography, Grid, Divider, Button } from '@mui/material';
import './Petbook.css'; // Use the same CSS for consistent styling

const PetBook = () => {
  return (
    <Box className="project-detail-container">
      {/* Top Logo Section */}
      <Box className="logo-section">
        <img
          src="/image/petbooklogo.png" // Replace with the PetBook logo file path
          alt="PetBook Logo"
          className="company-logo"
        />
      </Box>

      {/* Title, Description, and Overview Section */}
      <Box className="content-section">
        <div className="container">
          <Typography variant="h4" className="section-title">
            PetBook: A Social Media Platform for Pet Owners
          </Typography>
          <Typography variant="body1" className="section-description">
          PetBook is a social media platform where pet owners can post their pets, share life updates, and connect with the pet community.

          Our application includes the following features – hashed user registration, account status edits, social feeds, writing posts or comments, uploading pet pictures, group chat, friends’ live status, and search/add/delete friends.
 </Typography>
          <Divider className="section-divider" />
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">👩🏻‍💻 Role</Typography>
              <Typography variant="body2" className="overview-value">Frontend Developer</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">⏰ Timeline</Typography>
              <Typography variant="body2" className="overview-value">
                November 2022 - December 2022
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1" className="overview-label">🔧 Tools Used</Typography>
              <Typography variant="body2" className="overview-value">
                React.js, AWS (DynamoDB, S3), Node.js, Spark, Socket.io, AJAX
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>

  {/* GitHub Button */}
  <Box className="github-button-section">
        <div className="container">
          <Button
            variant="contained"
            color="primary"
            href="https://github.com/mtp0326/PetBook"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Github 👀
          </Button>
        </div>
      </Box>
      {/* Demo Section */}
      <Box className="experience-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            🕸️ Webpage Flowchart
          </Typography>
          <Box className="flowchart">
            <img
              src="/image/PetBookFlowchart.jpg"
              alt="PetBook Flowchart"
              className="centered-flowchart"
            />
          </Box>
        </div>
      </Box>

      {/* Features Section */}
      <Box className="impact-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
            ⚙️ User Accounts
          </Typography>
          
              <Typography variant="body1">
              The user registers through sign up where the user has to fill in their basic personal identifying information. In addition to inputting the personal information, the users also have to choose three interests from categories that would show up in the dropdown menu. Security measures are inputted to protect the password, which will be discussed later.

            The edit page allows users to edit their account information. They can change their first name, last name, password, email, affiliation, interest, and profile picture. When you visit the edit page, every field is initially populated with the current user’s profile information except for the password. In order to edit their account, the users must enter the correct password to submit. Once the information is edited, each altered field is updated in the DynamoDB table, replacing the old data. When an interest is updated, a post, created through an AJAX call, announcing the user’s interest is automatically created and added to the user’s wall.              
            </Typography>
           
             
        </div>
      </Box>
      <Divider className="divider" />

      <Box className="impact-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
          🏠 Homepage and Walls          
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <img src="/image/Homepage1.png" alt="Homepage Example 1" className="feature-image" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src="/image/Homepage2.png" alt="Homepage Example 2" className="feature-image" />
            </Grid>
          </Grid>
          
              <Typography variant="body1">
              The home page displays all of the posts created by user, all walls the user received, and get friend’s posts and walls friends received using recursion in routes through each friend of the user. The posts are sorted chronologically. All posts created from the homepage will be displayed with a title, the post creator, the date, the post content, and the comments. All homepage posts are stored in the DynamoDB table ‘posts’.

The wall gets all posts created by wall’s user, all walls the wall’s user received, and all walls the wall’s user sent to friends through recursing wall user’s friends. All posts created from the wall will have the title “[Sender] to [Receiver]” indicating the sender and receiver. The post contains the date, post contents, and comments. Like the homepage, users can write on their wall, and the post will pop-up at the top of a chronologically ordered list. All wall posts are stored in the DynamoDB table ‘walls’.

Each homepage and wall post display the number of likes, which is calculated from the string set of usernames collected from those who liked the post. This also means that a user who has already liked a post cannot like the post again. From the homepage and a wall, users can make comments displaying their username and its contents. The most recent comments are automatically displayed at the bottom of the list for a particular post. The comments are updated to the DynamoDB table ‘users’ or ‘walls’ respectively, under the “comments” attribute of the post.

</Typography>
           
             
        </div>
      </Box>


      {/* Technology Section */}
      <Box className="lessons-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
          🕹️ Dynamic content
          </Typography>
          <Typography variant="body1" className="section-description">
          On the left side of the homepage screen, it shows a list of friend requests. We check for new friend requests every 5 seconds, so the friend request would appear immediately after it is sent. On the frontend, we keep a list of friend requests, online users, posts, and friends; so, when an AJAX call receives new information every 5 seconds, we only display the newly added elements to avoid flickering. Whenever a user adds a new friend, the friend list is updated. If a user’s friend is online, a notification saying, “this friend is now online” pops up. When a friend request is accepted, both users receive a notification.
          </Typography>         
        </div>
      </Box>
      <Divider className="divider" />

      <Box className="lessons-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
          👯‍♀️ Friends
          </Typography>
          <Typography variant="body1" className="section-description">
          Users can search for other users with the search bar located in the top right corner of the home page. The search bar suggests different usernames depending on what is initially inputted through an AJAX call that gets all of the usernames and returns the suggested usernames. If the entered username does not exist, then the search returns to the previous page. If the entered username exists, the user is sent to that user’s wall.

</Typography>         
        </div>
      </Box>

      {/* Challenges and Solutions Section */}
      <Box className="experience-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
          💬 Chat          
          </Typography>
          <Grid container spacing={1} justifyContent="center">
            <Grid xs={16} sm={8}>
              <img src="/image/Chat.png" alt="Homepage Example 1" className="feature-image" />
            </Grid>
          
          </Grid>
          <Typography variant="body1" className="section-description">
          Users can access chat using the ‘Chat’ pop-up button on the lower right corner of the homepage. The layout includes a bar on the left displaying all online friends, user’s existing chats, a button to start a new chat, and chat invites waiting to be accepted or rejected. When a user logs in, their username is updated in the ‘online’ table string set, and removed from the database when they log out. We constantly get this information – as well as the existing chatrooms, and chat invites – allowing us to show the most up-to-date list of online users at all times. Users can open a chat room from the list of their active chat rooms.

To minimize traffic usage when connected between users, we used Socket.io. We also used DynamoDB with sets of users that were online, so if a user goes to the chat feature, the backend would automatically query for the online users that are friends with the current user.          </Typography>
       
              <Typography variant="body1" className="section-description">
                <b>Chat Invites & Group Chat</b> 
                </Typography>

                <Typography variant="body1" className="section-description">
                Users can send invites for the chat rooms they are in. To do that, the user first accesses the chat room, and invites friends from the ‘online friends’ list by clicking on the ‘invite’ button next to their username. The recipient of the invite can see it on their chat pop-up window, which shows them two options: accept or reject. If they accept it, they are now added to the chatroom and can view every message that has been sent in the chat room. To create a new group chat, users press the ‘add new chat’ button. This creates a chatroom instance with just that user and is added to the chatroom database and the chatroom id is updated to the user’s database. Once it is created, users can add online friends by clicking the invite button next to the username on the online friends list on the left side of the chat window. Newly added users will be able to see all the messages in the group chat, including ones from before they joined. Users can leave a chatroom by clicking on a button next to the group chat id. All chat rooms continue to work as long as at least one member remains in the group.
              </Typography>
      
              <Typography variant="body1"className="section-description">
                <b>Message Ordering</b> 
                </Typography>
                <Typography variant="body1">
                The messages in the chatrooms are stored as separate instances in the ‘chatrooms’ table in which has a list where the entities includes not only the message content, but the sender’s username, and time created. We use the timestamp to chronologically order the messages and maintain consistency for all users in the chat. The chatrooms also have a set of user IDs to check who is in the group chat. Each chat room is also a separate instance in the ‘chatrooms’ table, separate from any of its users. Hence the contents in the chat room remain as it is regardless of users joining or leaving the chat room. Each chat room’s key is uniquely made with a combination of the creator’s username and the timestamp of created time.
                </Typography>
        
        </div>
      </Box>
      <Divider className="divider" />
            {/* Overall Experience Section */}
      <Box className="experience-section">
        <div className="container">
          <Typography variant="h5" className="section-title">
          🔐 Security and Scalability
          </Typography>
          <Typography variant="body1" className="section-description">
          The passwords, encrypted using SHA-256 in the Stanford Javascript Crypto Library (SJCL), are hashed and sent to the database, which is stored in the DynamoDB table ‘users’. Our group used DynamoDB to store data of each user, their posts and comments, and news articles as a scalable database.

</Typography>
        </div>
      </Box>
    </Box>
  );
};

export default PetBook;
