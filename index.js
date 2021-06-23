const ytdl = require("ytdl-core-discord");
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'YOUR_BOT_TOKEN';
const PREFIX = 'god';

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity(`The vibe sesh`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/ninja"})
            .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
            .catch(console.error);
            
    
});

bot.on('message', async message=>{ 


    let args = message.content.substring(PREFIX.length).split(" ");
        
        setInterval(function(){
    }, 1000)

    switch(args[0]){
        case 'spam':

            var i=0;
            var theGuy = " ";
            var howMany = 0;
            var customMessage = " ";

            message.delete();

            theGuy = args[1];
            howMany = args[2];
            customMessage = args[3]
            if (args[1] === undefined){
                message.channel.send("You looking like a stupid ass bitch rn, Who you want to @?")
                return
            }else if (args[2] = 0){
                message.channel.send("You looking like a stupid ass bitch rn, How many messages do you want to send?")
                return
            }else if (args[3] === " "){
                message.channel.send("You looking like a stupid ass bitch rn, What message do you want to send?")
                return
            }
            while (i < howMany){
                message.channel.send(theGuy + " " + customMessage);
                i=i+1;
                continue;
            }    
            i = 0;
            howMany = 0;
            theGuy = " "
            return;
        
        case 'test':
            message.channel.send("Its working :)")

        case 'start':  
        message.delete();
            

        bible = [
            "Are not two sparrows sold for a penny? Yet not one of them will fall to the ground outside your Father’s care. And even the very hairs of your head are all numbered. So don’t be afraid; you are worth more than many sparrows. Captain Jack Sparrow",
            
            "And over all these virtues put on love, which binds them all together in perfect unity. Micheal Jackson",
            
            "Many are the plans in a person’s heart, but it is the Lord’s purpose that prevails. Call Me Carson",
            
            "But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you. John 14:26",
            
            "Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes? Matthew 6:25",
            
            "When pride comes, then comes disgrace,but with humility comes wisdom. proverbs 11:2",
            
            "Keep your mouth free of perversity;keep corrupt talk far from your lips. proverbs 4:24",
            
            "Gracious words are a honeycomb,sweet to the soul and healing to the bones. proverbs 16:24",
            
            "So Christ was sacrificed once to take away the sins of many; and he will appear a second time, not to bear sin, but to bring salvation to those who are waiting for him hebrews 9:28",
            
            "So Christ was sacrificed once to take away the sins of many; and he will appear a second time, not to bear sin, but to bring salvation to those who are waiting for him proverbs 11:25",
            
            "I long to see you so that I may impart to you some spiritual gift to make you strong— that is, that you and I may be mutually encouraged by each other’s faith. (apes stronger together)",
            
            "For the grace of God has appeared that offers salvation to all people. It teaches us to say “No” to ungodliness and worldly passions, and to live self-controlled, upright and godly lives in this present age. Titus 2:11-12",
            
            "In your relationships with one another, have the same mindset as Christ Jesus. Philippians 2:5",
            
            "Praise be to the Lord, to God our Savior,who daily bears our burdens. psaml 68:19",
            
            "But from everlasting to everlasting the Lord’s love is with those who fear him, and his righteousness with their children’s children—with those who keep his covenant and remember to obey his precepts.Psalm 103:17-18",
            
            "Come to me, all you who are weary and burdened, and I will give you rest. Matthew 11:28",
            
            "Now faith is confidence in what we hope for and assurance about what we do not see. Hebrews 11:1",
            
            "And now, Israel, what does the Lord your God ask of you but to fear the Lord your God, to walk in obedience to him, to love him, to serve the Lord your God with all your heart and with all your soul, and to observe the Lord’s commands and decrees that I am giving you today for your own good? Deuteronomy 10:12-13",
            
            "But you are a chosen people, a royal priesthood, a holy nation, God’s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light. 1 Peter 2:9",
            
            "Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life that the Lord has promised to those who love him.James 1:12",
            
            "He sent out his word and healed them; he rescued them from the grave.Psalm 107:20",
            
            "Whoever believes in him is not condemned, but whoever does not believe stands condemned already because they have not believed in the name of God’s one and only Son.john 3:18",
            
            "Do not be afraid, little flock, for your Father has been pleased to give you the kingdom. Luke 12:32",
            
            "But I tell you that everyone will have to give account on the day of judgment for every empty word they have spoken. Matthew 12:36",
            
            "burn the gays, in the name of the holy saint. Psalm 124:8",
            
            "“Go,” said Jesus, “your faith has healed you.” Immediately he received his sight and followed Jesus along the road. Mark 10:52",
            
            "Even fools are thought wise if they keep silent, and discerning if they hold their tongues. Proverbs 17:28",
            
            "Each of us should please our neighbors for their good, to build them up. Romans 15:2",
        ] 
            setInterval(function(){
                verseNumber = Math.floor((Math.random()*28) + 1); 
                message.channel.send(bible[verseNumber])
            }, 1200000);

        }
    });

bot.login(token); 
