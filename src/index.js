import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCards from './ApprovalCards';

const App = () => {
  return (
    <div className = "ui container comments">
      <ApprovalCards>
        <div>
          <h4>Warning!</h4>
           Are you sure you want to do this?
        </div>
        
      </ApprovalCards>
      <ApprovalCards>
        <CommentDetail 
        author="Sam" 
        timeAgo ="Today at 6:00PM"
        content="Nice blog post!"
        avatar={faker.image.avatar()}
        />
      </ApprovalCards>
      
      <ApprovalCards>
        <CommentDetail  
        author="Alex" 
        timeAgo ="Today at 2:00AM"
        content="I really like it!"
        avatar={faker.image.avatar()}
        />
      </ApprovalCards>

      <ApprovalCards>
        <CommentDetail  
        author="Jane" 
        timeAgo ="Yesterday at 5:00PM"
        content="Good Job!"
        avatar={faker.image.avatar()}
        />
      </ApprovalCards>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)