//add the live chat doc here
export const getRandomChatMessage = ()  => {
    const names = ["Aarav", "Ananya", "Rohit", "Ishita", "Karan", "Priya", "Kabir", "Meera", "Vikram", "Simran"];
    const messages = [
      "Hello everyone!",
      "Namaste from India!",
      "Great content, keep it up!",
      "Watching from Delhi!",
      "Amazing video!",
      "When is the next stream?",
      "This is so helpful, thank you!",
      "Can you share more on this topic?",
      "Love from Mumbai!",
      "This is exactly what I needed!",
    ];
  
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
    return {
      name: randomName,
      message: randomMessage,
    };
  }