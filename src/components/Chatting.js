
function ChatRoom(){

    const messagesRef = firestore.collection("message");
    const query = messagesRef.orderBy("createdAt").limit(25);

    const [messages] = useCollectionDate(query, {idField: "id"});
  
    return (
    <div>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
    </div>
  
      
    );
}
function ChatMessage(props){
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}

  
export default Chatting;