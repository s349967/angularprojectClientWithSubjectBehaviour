import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { tidslinje } from "../models/tidslinje";
import { title } from "../models/title";

@Injectable({ providedIn: 'root' })
export class newTextCommunicationService {

  baseURL: string = "https://commenttextpart.herokuapp.com/newTextServlet";

  constructor(private http: HttpClient) {
  }


  addPNewText(title: String, text: String): Observable<any> {
    const headers = { 'content-type': 'application/json; charset=utf-8' };
    const data = JSON.stringify({ "remoteMethod": "addText", "title": title, "text": text });
    return this.http.post(this.baseURL, data, { 'headers': headers });
    //return of("OK");
  }

  getText(title: String): Observable<title> {
    const headers = { 'content-type': 'application/json; charset=utf-8' };
    const data = JSON.stringify({ "remoteMethod": "getText", "title": title });
    return this.http.post <title>(this.baseURL, data, { 'headers': headers });
   // let database = [{ "id": 1, "text": "gtwtwtwtwt", "title": "twtw", "isdeleted": false },
   // { "id": 8, "text": "ta en", "title": "trett", "isdeleted": false },
  //  { "id": 9, "text": "I språkvitenskapen defineres tekst som en helhetlig, sammenhengende, språklig ytring med en bestemt kommunikativ funksjon. En tekst gir uttrykk for en kommunikativ intensjon, som å informere om noe, å oppfordre til handling eller å uttrykke talerens følelser. Videre består den av språklige tegn, som har et innhold og et uttrykk, og formidler på den måten referensielt innhold, det vil si informasjon om en reell, hypotetisk eller fiktiv verden. Tegnene er uttrykt i en viss modalitet, som skrift eller tale, og i et visst medium, som avis, bok, TV eller internett. Mange tekster inkluderer flere modaliteter, som bilder, musikk eller gestikk, og disse kalles da sammensatte eller multimodale tekster. De språklige (og eventuelt ikke-verbale) tegnene er knyttet sammen til en koherent helhet med en begynnelse og en slutt.\n\nEndelig inngår en tekst i en sjanger og forholder seg dermed til viss", "title": "sjokolade", "isdeleted": false },
  //  { "id": 10, "text": "The widow she cried over me, and called me a poor lost lamb, and she\ncalled me a lot of other names, too, but she never meant no harm by it.\nShe put me in them new clothes again, and I couldn\u0027t do nothing but sweat\nand sweat, and feel all cramped up. Well, then, the old thing commenced\nagain. The widow rung a bell for supper, and you had to come to time.\nWhen you got to the table you couldn\u0027t go right to eating, but you had to\nwait for the widow to tuck down her head and grumble a little over the\nvictuals, though there warn\u0027t really anything the matter with them,--that\nis, nothing only everything was cooked by itself. In a barrel of odds\nand ends it is different; things get mixed up, and the juice kind of\nswaps around, and the things go better.\n\nAfter supper she got out her book and learned me about Moses and the\nBulrushers, and I was in a sweat to find out all about him; but by and by\nshe let it out that Moses had been dead a considerable long time; so then\nI didn\u0027t care no more about him, because I don\u0027t take no stock in dead\npeople.\n\nPretty soon I wanted to smoke, and asked the widow to let me. But she\nwouldn\u0027t. She said it was a mean practice and wasn\u0027t clean, and I must\ntry to not do it any more. That is just the way with some people. They\nget down on a thing when they don\u0027t know nothing about it. Here she was\na-bothering about Moses, which was no kin to her, and no use to anybody,\nbeing gone, you see, yet finding a power of fault with me for doing a\nthing that had some good in it. And she took snuff, too; of course that\nwas all right, because she done it herself.\n\nHer sister, Miss Watson, a tolerable slim old maid, with goggles on, had\njust come to live with her, and took a set at me now with a spelling-\nbook. She worked me middling hard for about an hour, and then the widow\nmade her ease up. I couldn\u0027t stood it much longer. Then for an hour it\nwas deadly dull, and I was fidgety. Miss Watson would say, \"Don\u0027t put\nyour feet up there, Huckleberry;\" and \"Don\u0027t scrunch up like that,\nHuckleberry--set up straight;\" and pretty soon she would say, \"Don\u0027t gap\nand stretch like that, Huckleberry--why don\u0027t you try to behave?\" Then\nshe told me all about the bad place, and I said I wished I was there.\nShe got mad then, but I didn\u0027t mean no harm. All I wanted was to go\nsomewheres; all I wanted was a change, I warn\u0027t particular. She said it\nwas wicked to say what I said; said she wouldn\u0027t say it for the whole\nworld; she was going to live so as to go to the good place. Well, I\ncouldn\u0027t see no advantage in going where she was going, so I made up my\nmind I wouldn\u0027t try for it. But I never said so, because it would only\nmake trouble, and wouldn\u0027t do no good.\n\nNow she had got a start, and she went on and told me all about the good\nplace. She said all a body would have to do there was to go around all\nday long with a harp and sing, forever and ever. So I didn\u0027t think much\nof it. But I never said so. I asked her if she reckoned Tom Sawyer would\ngo there, and she said not by a considerable sight. I was glad about\nthat, because I wanted him and me to be together.\n\nMiss Watson she kept pecking at me, and it got tiresome and lonesome. By\nand by they fetched the niggers in and had prayers, and then everybody\nwas off to bed. I went up to my room with a piece of candle, and put it\non the table. Then I set down in a chair by the window and tried to\nthink of something cheerful, but it warn\u0027t no use. I felt so lonesome I\nmost wished I was dead. The stars were shining, and the leaves rustled\nin the woods ever so mournful; and I heard an owl, away off, who-whooing\nabout somebody that was dead, and a whippowill and a dog crying about\nsomebody that was going to die; and the wind was trying to whisper\nsomething to me, and I couldn\u0027t make out what it was, and so it made the\ncold shivers run over me. Then away out in the woods I heard that kind of\na sound that a ghost makes when it wants to tell about something that\u0027s\non its mind and can\u0027t make itself understood, and so can\u0027t rest easy in\nits grave, and has to go about that way every night grieving. I got so\ndown-hearted and scared I did wish I had some company. Pretty soon a\nspider went crawling up my shoulder, and I flipped it off and it lit in\nthe candle; and before I could budge it was all shriveled up. I didn\u0027t\nneed anybody to tell me that that was an awful bad sign and would fetch\nme some bad luck, so I was scared and most shook the clothes off of me.\nI got up and turned around in my tracks three times and crossed my breast\nevery time; and then I tied up a little lock of my hair with a thread to\nkeep witches away. But I hadn\u0027t no confidence. You do that when you\u0027ve\nlost a horseshoe that you\u0027ve found, instead of nailing it up over the\ndoor, but I hadn\u0027t ever heard anybody say it was any way to keep off bad\nluck when you\u0027d killed a spider.\n\nI set down again, a-shaking all over, and got out my pipe for a smoke;\nfor the house was all as still as death now, and so the widow wouldn\u0027t\nknow. Well, after a long time I heard the clock away off in the town go\nboom--boom--boom--twelve licks; and all still again--stiller than ever.\nPretty soon I heard a twig snap down in the dark amongst the trees--\nsomething was a stirring. I set still and listened. Directly I could\njust barely hear a \"me-yow! me-yow!\" down there. That was good! Says I,\n\"me-yow! me-yow!\" as soft as I could, and then I put out the light and\nscrambled out of the window on to the shed. Then I slipped down to the\nground and crawled in among the trees, and, sure enough, there was Tom\nSawyer waiting for me.\n\nCHAPTER II.\n\nWE went tiptoeing along a path amongst the trees back towards the end of\nthe widow\u0027s garden, stooping down so as the branches wouldn\u0027t scrape our\nheads. When we was passing by the kitchen I fell over a root and made a\nnoise. We scrouched down and laid still. Miss Watson\u0027s big nigger,\nnamed Jim, was setting in the kitchen door; we could see him pretty\nclear, because there was a light behind him. He got up and stretched his\nneck out about a minute, listening. Then he says:\n\n\"Who dah?\"\n\nHe listened some more; then he come tiptoeing down and stood right\nbetween us; we could a touched him, nearly. Well, likely it was minutes\nand minutes that there warn\u0027t a sound, and we all there so close\ntogether. There was a place on my ankle that got to itching, but I\ndasn\u0027t scratch it; and then my ear begun to itch; and next my back, right\nbetween my shoulders. Seemed like I\u0027d die if I couldn\u0027t scratch. Well,\nI\u0027ve noticed that thing plenty times since. If you are with the quality,\nor at a funeral, or trying to go to sleep when you ain\u0027t sleepy--if you\nare anywheres where it won\u0027t do for you to scratch, why you will itch all\nover in upwards of a thousand places. Pretty soon Jim says:\n\n\"Say, who is you? Whar is you? Dog my cats ef I didn\u0027 hear sumf\u0027n.\nWell, I know what I\u0027s gwyne to do: I\u0027s gwyne to set down here and listen\ntell I hears it agin.\"\n\nSo he set down on the ground betwixt me and Tom. He leaned his back up\nagainst a tree, and stretched his legs out till one of them most touched\none of mine. My nose begun to itch. It itched till the tears come into\nmy eyes. But I dasn\u0027t scratch. Then it begun to itch on the inside.\nNext I got to itching underneath. I didn\u0027t know how I was going to set\nstill. This miserableness went on as much as six or seven minutes; but it\nseemed a sight longer than that. I was itching in eleven different\nplaces now. I reckoned I couldn\u0027t stand it more\u0027n a minute longer, but I\nset my teeth hard and got ready to try. Just then Jim begun to breathe\nheavy; next he begun to snore--and then I was pretty soon comfortable\nagain.\n\nTom he made a sign to me--kind of a little noise with his mouth--and we\nwent creeping away on our hands and knees. When we was ten foot off Tom\nwhispered to me, and wanted to tie Jim to the tree for fun. But I said\nno; he might wake and make a disturbance, and then they\u0027d find out I\nwarn\u0027t in. Then Tom said he hadn\u0027t got candles enough, and he would slip\nin the kitchen and get some more. I didn\u0027t want him to try. I said Jim\nmight wake up and come. But Tom wanted to resk it; so we slid in there\nand got three candles, and Tom laid five cents on the table for pay.\nThen we got out, and I was in a sweat to get away; but nothing would do\nTom but he must crawl to where Jim was, on his hands and knees, and play\nsomething on him. I waited, and it seemed a good while, everything was\nso still and lonesome.\n\nAs soon as Tom was back we cut along the path, around the garden fence,\nand by and by fetched up on the steep top of the hill the other side of\nthe house. Tom said he slipped Jim\u0027s hat off of his head and hung it on\na limb right over him, and Jim stirred a little, but he didn\u0027t wake.\nAfterwards Jim said the witches be witched him and put him in a trance,\nand rode him all over the State, and then set him under the trees again,\nand hung his hat on a limb to show who done it. And next time Jim told\nit he said they rode him down to New Orleans; and, after that, every time\nhe told it he spread it more and more, till by and by he said they rode\nhim all over the world, and tired him most to death, and his back was all\nover saddle-boils. Jim was monstrous proud about it, and he got so he\nwouldn\u0027t hardly notice the other niggers. Niggers would come miles to\nhear Jim tell about it, and he was more looked up to than any nigger in\nthat country. Strange niggers would stand with their mouths open and\nlook him all over, same as if he was a wonder. Niggers is always talking\nabout witches in the dark by the kitchen fire; but whenever one was\ntalking and letting on to know all about such things, Jim would happen in\nand say, \"Hm! What you know \u0027bout witches?\" and that nigger was corked\nup and had to take a back seat. Jim always kept that five-center piece\nround his neck with a string, and said it was a charm the devil give to\nhim with his own hands, and told him he could cure anybody with it and\nfetch witches whenever he wanted to just by saying something to it; but\nhe never told what it was he said to it. Niggers would come from all\naround there and give Jim anything they had, just for a sight of that\nfive-center piece; but they wouldn\u0027t touch it, because the devil had had\nhis hands on it. Jim was most ruined for a servant, because he got stuck\nup on account of having seen the devil and been rode by witches.\n\nWell, when Tom and me got to the edge of the hilltop we looked away down\ninto the village and could see three or four lights twinkling, where\nthere was sick folks, maybe; and the stars over us was sparkling ever so\nfine; and down by the village was the river, a whole mile broad, and\nawful still and grand. We went down the hill and found Jo Harper and Ben\nRogers, and two or three more of the boys, hid in the old tanyard. So we\nunhitched a skiff and pulled down the river two mile and a half, to the\nbig scar on the hillside, and went ashore.\n\nWe went to a clump of bushes, and Tom made everybody swear to keep the\nsecret, and then showed them a hole in the hill, right in the thickest\npart of the bushes. Then we lit the candles, and crawled in on our hands\nand knees. We went about two hundred yards, and then the cave opened up.\nTom poked about amongst the passages, and pretty soon ducked under a wall\nwhere you wouldn\u0027t a noticed that there was a hole. We went along a\nnarrow place and got into a kind of room, all damp and sweaty and cold,\nand there we stopped. Tom says:\n\n\"Now, we\u0027ll start this band of robbers and call it Tom Sawyer\u0027s Gang.\nEverybody that wants to join has got to take an oath, and write his name\nin blood.\"\n\nEverybody was willing. So Tom got out a sheet of paper that he had wrote\nthe oath on, and read it. It swore every boy to stick to the band, and\nnever tell any of the secrets; and if anybody done anything to any boy in\nthe band, whichever boy was ordered to kill that person and his family\nmust do it, and he mustn\u0027t eat and he mustn\u0027t sleep till he had killed\nthem and hacked a cross in their breasts, which was the sign of the band.\nAnd nobody that didn\u0027t belong to the band could use that mark, and if he\ndid he must be sued; and if he done it again he must be killed. And if\nanybody that belonged to the band told the secrets, he must have his\nthroat cut, and then have his carcass burnt up and the ashes scattered\nall around, and his name blotted off of the list with blood and never\nmentioned again by the gang, but have a curse put on it and be forgot\nforever.\n\nEverybody said it was a real beautiful oath, and asked Tom if he got it\nout of his own head. He said, some of it, but the rest was out of\npirate-books and robber-books, and every gang that was high-toned had it.\n\nSome thought it would be good to kill the FAMILIES of boys that told the\nsecrets. Tom said it was a good idea, so he took a pencil and wrote it\nin. Then Ben Rogers says:\n\n\"Here\u0027s Huck Finn, he hain\u0027t got no family; what you going to do \u0027bout\nhim?\"\n\n\"Well, hain\u0027t he got a father?\" says Tom Sawyer.\n\n\"Yes, he\u0027s got a father, but you can\u0027t never find him these days. He\nused to lay drunk with the hogs in the tanyard, but he hain\u0027t been seen\nin these parts for a year or more.\"\n\nThey talked it over, and they was going to rule me out, because they said\nevery boy must have a family or somebody to kill, or else it wouldn\u0027t be\nfair and square for the others. Well, nobody could think of anything to\ndo--everybody was stumped, and set still. I was most ready to cry; but\nall at once I thought of a way, and so I offered them Miss Watson--they\ncould kill her. Everybody said:\n\n\"Oh, she\u0027ll do. That\u0027s all right. Huck can come in.\"\n\nThen they all stuck a pin in their fingers to get blood to sign with, and\nI made my mark on the paper.\n\n\"Now,\" says Ben Rogers, \"what\u0027s the line of business of this Gang?\"\n\n\"Nothing only robbery and murder,\" Tom said.\n\n\"But who are we going to rob?--houses, or cattle, or--\"\n\n\"Stuff! stealing cattle and such things ain\u0027t robbery; it\u0027s burglary,\"\nsays Tom Sawyer. \"We ain\u0027t burglars. That ain\u0027t no sort of style. We\nare highwaymen. We stop stages and carriages on the road, with masks on,\nand kill the people and take their watches and money.\"\n\n\"Must we always kill the people?\"\n\n\"Oh, certainly. It\u0027s best. Some authorities think different, but mostly\nit\u0027s considered best to kill them--except some that you bring to the cave\nhere, and keep them till they\u0027re ransomed.\"\n\n\"Ransomed? What\u0027s that?\"\n\n\"I don\u0027t know. But that\u0027s what they do. I\u0027ve seen it in books; and so\nof course that\u0027s what we\u0027ve got to do.\"\n\n\"But how can we do it if we don\u0027t know what it is?\"\n\n\"Why, blame it all, we\u0027ve GOT to do it. Don\u0027t I tell you it\u0027s in the\nbooks? Do you want to go to doing different from what\u0027s in the books,\nand get things all muddled up?\"\n\n\"Oh, that\u0027s all very fine to SAY, Tom Sawyer, but how in the nation are\nthese fellows going to be ransomed if we don\u0027t know how to do it to them?\n--that\u0027s the thing I want to get at. Now, what do you reckon it is?\"\n\n\"Well, I don\u0027t know. But per\u0027aps if we keep them till they\u0027re ransomed,\nit means that we keep them till they\u0027re dead.\"\n\n\"Now, that\u0027s something LIKE. That\u0027ll answer. Why couldn\u0027t you said that\nbefore? We\u0027ll keep them till they\u0027re ransomed to death; and a bothersome\nlot they\u0027ll be, too--eating up everything, and always trying to get\nloose.\"\n\n\"How you talk, Ben Rogers. How can they get loose when there\u0027s a guard\nover them, ready to shoot them down if they move a peg?\"\n\n\"A guard! Well, that IS good. So somebody\u0027s got to set up all night and\nnever get any sleep, just so as to watch them. I think that\u0027s\nfoolishness. Why can\u0027t a body take a club and ransom them as soon as they\nget here?\"\n\n\"Because it ain\u0027t in the books so--that\u0027s why. Now, Ben Rogers, do you\nwant to do things regular, or don\u0027t you?--that\u0027s the idea. Don\u0027t you\nreckon that the people that made the books knows what\u0027s the correct thing\nto do? Do you reckon YOU can learn \u0027em anything? Not by a good deal.\nNo, sir, we\u0027ll just go on and ransom them in the regular way.\"\n\n\"All right. I don\u0027t mind; but I say it\u0027s a fool way, anyhow. Say, do we\nkill the women, too?\"\n\n\"Well, Ben Rogers, if I was as ignorant as you I wouldn\u0027t let on. Kill\nthe women? No; nobody ever saw anything in the books like that. You\nfetch them to the cave, and you\u0027re always as polite as pie to them; and\nby and by they fall in love with you, and never want to go home any\nmore.\"\n\n\"Well, if that\u0027s the way I\u0027m agreed, but I don\u0027t take no stock in it.\nMighty soon we\u0027ll have the cave so cluttered up with women, and fellows\nwaiting to be ransomed, that there won\u0027t be no place for the robbers.\nBut go ahead, I ain\u0027t got nothing to say.\"\n\nLittle Tommy Barnes was asleep now, and when they waked him up he was\nscared, and cried, and said he wanted to go home to his ma, and didn\u0027t\nwant to be a robber any more.\n\nSo they all made fun of him, and called him cry-baby, and that made him\nmad, and he said he would go straight and tell all the secrets. But Tom\ngive him five cents to keep quiet, and said we would all go home and meet\nnext week, and rob somebody and kill some people.\n\nBen Rogers said he couldn\u0027t get out much, only Sundays, and so he wanted\nto begin next Sunday; but all the boys said it would be wicked to do it\non Sunday, and that settled the thing. They agreed to get together and\nfix a day as soon as they could, and then we elected Tom Sawyer first\ncaptain and Jo Harper second captain of the Gang, and so started home.\n\nI clumb up the shed and crept into my window just before day was\nbreaking. My new clothes was all greased up and clayey, and I was dog-\ntired.\n\nCHAPTER III.\n\nWELL, I got a good going-over in the morning from old Miss Watson on\naccount of my clothes; but the widow she didn\u0027t scold, but only cleaned\noff the grease and clay, and looked so sorry that I thought I would\nbehave awhile if I could. Then Miss Watson she took me in the closet and\nprayed, but nothing come of it. She told me to pray every day, and\nwhatever I asked for I would get it. But it warn\u0027t so. I tried it.\nOnce I got a fish-line, but no hooks. It warn\u0027t any good to me without\nhooks. I tried for the hooks three or four times, but somehow I couldn\u0027t\nmake it work. By and by, one day, I asked Miss Watson to try for me, but\nshe said I was a fool. She never told me why, and I couldn\u0027t make it out\nno way.\n\nI set down one time back in the woods, and had a long think about it. I\nsays to myself, if a body can get anything they pray for, why don\u0027t\nDeacon Winn get back the money he lost on pork? Why can\u0027t the widow get\nback her silver snuffbox that was stole? Why can\u0027t Miss Watson fat up?\nNo, says I to my self, there ain\u0027t nothing in it. I went and told the\nwidow about it, and she said the thing a body could get by praying for it\nwas \"spiritual gifts.\" This was too many for me, but she told me what\nshe meant--I must help other people, and do everything I could for other\npeople, and look out for them all the time, and never think about myself.\nThis was including Miss Watson, as I took it. I went out in the woods\nand turned it over in my mind a long time, but I couldn\u0027t see no\nadvantage about it--except for the other people; so at last I reckoned I\nwouldn\u0027t worry about it any more, but just let it go. Sometimes the\nwidow would take me one side and talk about Providence in a way to make a\nbody\u0027s mouth water; but maybe next day Miss Watson would take hold and\nknock it all down again. I judged I could see that there was two\nProvidences, and a poor chap would stand considerable show with the\nwidow\u0027s Providence, but if Miss Watson\u0027s got him there warn\u0027t no help for\nhim any more. I thought it all out, and reckoned I would belong to the\nwidow\u0027s if he wanted me, though I couldn\u0027t make out how he was a-going to\nbe any better off then than what he was before, seeing I was so ignorant,\nand so kind of low-down and ornery.\n\nPap he hadn\u0027t been seen for more than a year, and that was comfortable\nfor me; I didn\u0027t want to see him no more. He used to always whale me\nwhen he was sober and could get his hands on me; though I used to take to\nthe woods most of the time when he was around. Well, about this time he\nwas found in the river drownded, about twelve mile above town, so people\nsaid. They judged it was him, anyway; said this drownded man was just\nhis size, and was ragged, and had uncommon long hair, which was all like\npap; but they couldn\u0027t make nothing out of the face, because it had been\nin the water so long it warn\u0027t much like a face at all. They said he was\nfloating on his back in the water. They took him and buried him on the\nbank. But I warn\u0027t comfortable long, because I happened to think of\nsomething. I knowed mighty well that a drownded man don\u0027t float on his\nback, but on his face. So I knowed, then, that this warn\u0027t pap, but a\nwoman dressed up in a man\u0027s clothes. So I was uncomfortable again. I\njudged the old man would turn up again by and by, though I wished he\nwouldn\u0027t.\n\nWe played robber now and then about a month, and then I resigned. All\nthe boys did. We hadn\u0027t robbed nobody, hadn\u0027t killed any people, but\nonly just pretended. We used to hop out of the woods and go charging\ndown on hog-drivers and women in carts taking garden stuff to market, but\nwe never hived any of them. Tom Sawyer called the hogs \"ingots,\" and he\ncalled the turnips and stuff \"julery,\" and we would go to the cave and\npowwow over what we had done, and how many people we had killed and\nmarked. But I couldn\u0027t see no profit in it. One time Tom sent a boy to\nrun about town with a blazing stick, which he called a slogan (which was\nthe sign for the Gang to get together), and then he said he had got\nsecret news by his spies that next day a whole parcel of Spanish\nmerchants and rich A-rabs was going to camp in Cave Hollow with two\nhundred elephants, and six hundred camels, and over a thousand \"sumter\"\nmules, all loaded down with di\u0027monds, and they didn\u0027t have only a guard\nof four hundred soldiers, and so we would lay in ambuscade, as he called\nit, and kill the lot and scoop the things. He said we must slick up our\nswords and guns, and get ready. He never could go after even a turnip-\ncart but he must have the swords and guns all scoured up for it, though\nthey was only lath and broomsticks, and you might scour at them till you\nrotted, and then they warn\u0027t worth a mouthful of ashes more than what\nthey was before. I didn\u0027t believe we could lick such a crowd of\nSpaniards and A-rabs, but I wanted to see the camels and elephants, so I\nwas on hand next day, Saturday, in the ambuscade; and when we got the\nword we rushed out of the woods and down the hill. But there warn\u0027t no\nSpaniards and A-rabs, and there warn\u0027t no camels nor no elephants. It\nwarn\u0027t anything but a Sunday-school picnic, and only a primer-class at\nthat. We busted it up, and chased the children up the hollow; but we\nnever got anything but some doughnuts and jam, though Ben Rogers got a\nrag doll, and Jo Harper got a hymn-book and a tract; and then the teacher\ncharged in, and made us drop everything and cut. I didn\u0027t see no\ndi\u0027monds, and I told Tom Sawyer so. He said there was loads of them\nthere, anyway; and he said there was A-rabs there, too, and elephants and\nthings. I said, why couldn\u0027t we see them, then? He said if I warn\u0027t so\nignorant, but had read a book called Don Quixote, I would know without\nasking. He said it was all done by enchantment. He said there was\nhundreds of soldiers there, and elephants and treasure, and so on, but we\nhad enemies which he called magicians; and they had turned the whole\nthing into an infant Sunday-school, just out of spite. I said, all\nright; then the thing for us to do was to go for the magicians. Tom\nSawyer said I was a numskull.\n\n\"Why,\" said he, \"a magician could call up a lot of genies, and they would\nhash you up like nothing before you could say Jack Robinson. They are as\ntall as a tree and as big around as a church.\"\n\n\"Well,\" I says, \"s\u0027pose we got some genies to help US--can\u0027t we lick the\nother crowd then?\"\n\n\"How you going to get them?\"\n\n\"I don\u0027t know. How do THEY get them?\"\n\n\"Why, they rub an old tin lamp or an iron ring, and then the genies come\ntearing in, with the thunder and lightning a-ripping around and the smoke\na-rolling, and everything they\u0027re told to do they up and do it. They\ndon\u0027t think nothing of pulling a shot-tower up by the roots, and belting\na Sunday-school superintendent over the head with it--or any other ma", "title": "TEST", "isdeleted": false }];
  // return of(database.filter((x) => x.title == title)[0]);


  }
  deletePText(title: String): Observable<any> {
    const headers = { 'content-type': 'application/json; charset=utf-8' };
    const data = JSON.stringify({ "remoteMethod": "deleteText", "title": title });
    return this.http.post(this.baseURL, data, { 'headers': headers });
    //return of("OK")
  }
  getTitlesFromServer(): Observable<String[]> {
    const headers = {
      'content-type': 'application/json; charset=utf-8'   };
    const data = JSON.stringify({ "remoteMethod": "getTitles" });
    return this.http.post<String[]>(this.baseURL, data, { 'headers': headers });

    //MOCK TEST
    //return of(["twtw", "trett", "sjokolade", "TEST"]);
  }
}

