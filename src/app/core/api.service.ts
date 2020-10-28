import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ICollaboration, IProject, IPublication } from './types';

export interface IMenu {
  name: string;
  children?: { id: number; name: string }[];
}

const textItem = `Alessio Romano, artist. Originally from Roma, Italy. For some reasons his mother moved to jg Russia when hi was so young.
In Moscow he have got a russian name. He never mentioned his  inal ancestry until the end of carrier in marketing and advertising. Stroganov
University o inal ancestry until the end of carrier in marketing and advertising. Stroganov University o & Design /Graphic &
Alessio Romano, artist. Originally from Roma, Italy. For some reasons his mother moved to jg Russia when hi was so young. In Moscow
he have got a russian name. He never mentioned his  inal ancestry until the end of carrier in marketing and advertising. Stroganov
University o inal ancestry until the end of carrier in marketing and advertising. Stroganov University o & Design /Graphic
`;

const textStub = [textItem, textItem, textItem];

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  topMenu() {
    return [
      { id: 1, name: 'metadata' },
      { id: 2, name: 'exhibitions' },
      { id: 3, name: 'projects' },
      { id: 4, name: 'collaborations' },
      {
        id: 0,
        name: 'buy',
        children: [
          { id: 1, name: 'art' },
          { id: 2, name: 'instalation' },
          { id: 3, name: 'print' },
          { id: 4, name: 'collection 4 home' },
          { id: 5, name: 'collection 4 man' },
          { id: 6, name: 'collection 4 woman' },
          { id: 7, name: 'accessory' },
          { id: 8, name: 'souvenirs' },
        ],
      },
      { id: 5, name: 'legalterms' },
      { id: 6, name: 'contacts' },
      { id: 7, name: 'publications' },
      { id: 8, name: 'video' },
    ];
  }

  getCollaborations(): Observable<ICollaboration[]> {
    return of([
      { name: 'apophenia', text: textStub },
      { name: 'dream', text: textStub },
      { name: 'meaning', text: textStub },
    ]);
  }

  getExhibitions() {
    return of([
      { id: 0, text: [textItem, textItem] },
      { id: 1, text: [textItem, textItem], margin: '0 -2vw 0 -2vw' },
      { id: 2, text: [textItem, textItem] },
      { id: 3, text: [textItem, textItem] },
      { id: 4, text: [textItem, textItem] },
      { id: 5, text: [textItem, textItem] },
    ]);
  }

  getProjects(): Observable<IProject[]> {
    return of([
      {
        name: 'apophenia',
        title: 'Singularity Synchronicity Apophenia',
        quote: 'Quidquid luce dictum sit altum sonatur.',
        text: [
          'White light is approaching you slowly and inevitably retreating and approaching again. It is slowly occupying your consciousness. You physically feel its vibration, its density and unbearable burden. Light presses on your body, penetrating into your consciousness erasing thoughts, feelings, emotions and fills the whole space with itself. You feel as if you are under the pressure of the huge mass of a dazzling bright star, but for some reason, you still exist.',
          'Every blink erupts before your eyes. Each moment bears a sacral meaning, but it does not bring clarity to what is happening.',
          'The numerological plexus of signs fills the symbols with vibration and meaning. Vibration lasts forever. Light attracts your mind like a magnet. You cannot resist, cannot change anything. You feel as if you are devoid of will. You are a part of what is happening and by touching your gadget you realize that there is a quantum of eternity in front of you and in your hands. Its reflection is on your smartphone screen. It seems to you that you own it. But, no! It is likely to  possess your consciousness and submit to its algorithms. ',
          'All the conventions that life has brought into your consciousness are dissolving. The usual cognitive connections, perception skills, templates imposed by public institutions - are erased. You are at the moment of your rebirth "On the contrary". It looks like a revelation! An explosion! An orgasm! You are pure consciousness. And you are beginning to realize it! ',
          'You are looking at the meaning of absolute abstraction - Moments. Moments "Before". Before enlightenment, catastrophe, discovery, birth of the newest religion or before going over the Divide.',
          'There emerges a feeling of irreversibility, fatality and ... opportunity. So what is it? The predestination that you yourself have created it and it has become a reality? Is it perhaps a manifestation of higher Consciousness? The Consciousness that rules the Universe apart from your will and has brought the mankind to the point of technological singularity by presenting the Artificial Intelligence to the world? None of this matters anymore.',
          'You are It. It is you. By becoming an observer you began to influence the processes, and the processes began to influence you.',
          'Every movement you make is reflected in a dazzling white light. You are like a couple of tangled particles, as a part of a magic action.  A part of the visualization of augmented reality, the mystery of technological processes predicted by Raymond Kurzweil.',
          'In front of you, Time flickers and vibrates, drawing patterns of the spiritual values of humanity. Everything is woven in the changing fabric of images and appears before your eyes as a story of spiritual evolution of civilization. Symbols create the invisible substance of the soul space, mystical ether in which there is neither past nor future ... only the present. Everything is so volatile, but the sacral truth of eternity is hidden behind it. The images slip away and dissolve in the vibrations of the White Light, disappearing in Eternity. Light does not release you from its embraces.',
          'The whole action is subject to a kind of law. It bears the resemblance of a deeply organized chaos. Serpinsky’s triangle emerges in the minds of those who are not alien to mathematics! You grasp the interrelation of changes. But you do not feel the predetermination and consistency that exist like the Great Attractor. What opens up to your inner eye? A cause-and-effect relation? Or a set of obviously unrelated symbols that denote great events, composing the structure of evolution according to the rules the universes of spirit exist, creating and destroying the fractals of time?',
          'What gave rise to this glow of numbers and signs? These Mandalas of the Digital Age! These crystals of Time! What are the reflections of a mediator fascinated by Oriental philosophy and meditative practices of Dzogchen and Za-Zen?',
          `The Copenhagen interpretation? Quantum entanglement? Heisenberg's state of uncertainty? The concept of superposition? The phenomenon of synchronicity described by Jung? More than one and a half
          thousand elements of compositions were assembled spontaneously over an eleven-year period! Could it be a metaphor for technological singularity predicted by the famous futurologist? You seem to be on the
          "Horizon of Events" of technologic progress.`,
          'What is that? Is it madness or the insight of a man living in our era? The interplay of his consciousness or the fact of general or personal insanity? Apophenia?',
          'It is difficult to describe in objective detail the range of interests and devotions of the creator and everything that influenced the fact of creation. But, it is possible to feel it on the "Horizon of Understanding". ',
          'Could it be the quint-essence of deep emotions connected with personal experiences at a critical moment of life? The impact of omnipresent gadgets on reality in the run-up to the era of post-industrial capitalism and the digital economy. The coming global digital slavery? A change in the economic paradigm of a particular geopolitical player or the entire region and the whole world. Hybrid political regimes and wars. Atomization of society. Artificial intellect. Cyber terrorism. Simulacra. Information leakage. Fake news and Deepfake technology changing reality on a real-time basis. Agents of influence. Blogging as the newest form of mass media. Birth of crypto-economics. Electronic services. Death of religions. Rewriting History. Deconstruction of social institutions of society. Migration processes. Revision of ideas of globalization. Enclaves of trans-corporations with their own corporate culture. The war of all against all. Social networks. Augmented and virtual reality. Metadata. Total Transparency in anticipation of a global crisis... - we can make a long list of the factors of our existence based on technology and digits. Meta-modernism, before it had even begun, had already completed its existence as the newest trend in art. Quantum technology has accelerated the expansion of the digital universe. The era of Inter-activism has arrived. ',
          'These anthologies of an individual and/or a group of the obsessed immersed in narrow professional humanitarian practices are infinitely far from being understood by a common person with a one-quarter-of–a-year planning horizon (at best). For deep understanding of the above- mentioned non-linear processes, creativity and a proper intellectual basis are required! ',
          'The phenomenon of the art project consists in the fact that everyone, literally everyone, is part of it, its "moment" at the face of infinity. After all, everyone daily contacts the already familiar, but in fact unique phenomenon in his routine life. Everyone physically and emotionally reacts to it, to the very fact of its existence, interacts with it and participates in the process of forming the newest reality remaining unaware of it.',
          'There is no need to describe in detail the project itself, when it is possible to touch it or even own a part of it, realizing your belonging.',
          'This text is not yet another ode or a libel on the theme of contemporary art. It is a spontaneous reaction or rather a suggestion to immerse yourself in the glow of the White Light, dazzling brightly blazing on the background of the dark matter of existence in the infinitely expanding universe of delusions and revelations. A call to experience the power of the Light of Consciousness beyond the framework of scientific theories and postulates of world religions. An opportunity to feel the elusive radiance of the Truth. After all, each of us, whether we want it or not, is a part of the approaching technological singularity! That is not a myth! This is reality! Digitalism.',
          `Turn to the AI if it hasn't been turned off again. Look at your gadget screen.`,
        ],
      },
      {
        name: 'dream',
        title: 'Dreampressions',
        quote: 'Il simile attira il simile.',
        text: [
          'In the eyes of the layman/cynic:',
          `... all this modern art is pure hype.
          You can say that this is a kind of misperception, but when I see the visitors at exhibitions of contemporary "art" with a thoughtful look stare at hung animals or a bunch of colored feces,
          talking about the genius of the ”creators” the fairy-tale “The Emperor’s New Clothes” comes to my mind.
          And fools who were afraid to look like fools...total disgrace.  What is it all about? Cushions, sheets... I have numbers of these at home... So many people are sewing, and gluing and chopping.
          I remember when they exhibited axes as pictures. Or as sculptures. Oh! And there are heads and faces on pillows. In wreaths. Heads! There! Axes and heads. Axes will be plugged in here. And there is a sheet.
          And the whole body is imprinted on it. Oh, yeah. Is that a hint? Tough. I can make this as well. At home. I am sorry for the sheets.  Expensive sheets.
          They'd better be given to me. Art! No, I have got a tougher hide, though. Where did they get  these dead? And I think I saw this one. In a textbook on literature. Yeah, that's right. I wrote about Odysseus.
          Who's the smiley one? I saw him in the museum. ...Voltaire. This one in a wreath... ...in the wreath is Caesar, yeah! Why not the president? It's all right, though. Everyone's sleepy, of course. They are beat.
          Oh, how smashed Socrates is. Oh, fire! Oh, a delusional thought but on topic: "One night from a vulva to a Volvo." Those bitches. If they were on a T-shirt like that, I'd wear one. I would hype it.
          Recently, I've been listening to lectures on contemporary art at HSE, they're just formations through which it's easier to influence the worldview or to communicate a message.
          Actually, everything is designed for a sensation or first impression. ... Hey, you can just smear your dick in paint and drag it on canvas... ...but there's no shit here.
          It's all stained with the heads of philosophers. They're so pressed. And what do they smoke? That must be the way with our investors. They're gonna put it in, and then... Or, with those who were waiting for their pensions, and they both pushed them away.
          Or they could have slept in peace. I don't understand their artistic value, so I subconsciously deny it, so I want either to be explained or to get my opinion fixed. They say that buying modern art is an investment. They say Yves Klein is worth millions!
          This has nothing to do with art and aesthetics. `,
          `Apply marketing ideas and you can do anything. And to write beautifully, to shoot films, but... ...until you see it with your own eyes. It's kind of tricky. The dozen of thoughts can be quoted by comedians.
          Well, great, that is hype.`,
          'In the opinion of a psychologist/psychotherapist:',
          `That is the way, my darlings, looks like Ward Number Six! Chekhov finally managed to be illustrated. All men of genius are under one roof. There are so many of them! More than sixteen psycho-types.
          From Napoleon, though almost all of them here are “napoleons”, to Robespierre. Although according to their statements, they belong to Hamlet. Oh! Subtle. ... Makes you smile. As a whole, there is a lot to agree with.
          In fact, the metaphor of a dream is quite apt. So many thoughts crowded out from the subconscious that we can see a booming process. ... It's a pity it's not possible to write "We deal with complex cases.
          We come quickly to the rescue. Call, 24/7!" and the phone number. "... Oh, it's about immanent disorders... Agoraphobia. The examination of all this could cause abulia, I think.
          And then there are bipolar disorder and affective psychosis. Mostly mixed paranoid and paranoyal syndrome. And the authors are paraphrenic. ... But a healthy amount of irony, sarcasm and cynicism suggests otherwise.
          Give them the Kettell or Wexler tests. ... ... Sometimes the psychomotor tone gets a bit stiff. Conflict, hyperactivity. Well, the usual. Epitheptaic accentuation. ... Yeah, they're hysteroids and paranoyals.
          According to socionics it reveals another side. A collection of psycho-types. I'd rather change the existing names to these. It'd be easier if they were all from ancient times, though we can't judge about the ancient as Balzac, Gabin and others.
          There is no anamnesis, alas! And these living phrases are very suitable. It's a very modern cocktail! In the spirit of postmodernism. ... a clear example of how ill the society is at this turn of evolution.
          And here I can quote a paraphrased remark by a famous person: "If you don't have a diagnosis, it doesn't mean you're not sick. It means that you've been hiding it well." I don't understand modernity in general,
          but it gets under my skin. There's a spirit of the time. "Think while it's still legal" is akin to foresight or prophecy.`,
          'In the opinion of an analyst (The President’s Administration):',
          `It's not a trend anymore, this contemporary art. We don't need this channel for influence at all. And our meta-analysis confirms it. Yeah, well, Mom didn't give birth to twins. - me and fear.
          Well, it's not a question of adding fear. It's a matter of budget. Individuals with highly adaptive morale... Aristotle, Voltaire. Neither Montesquieu nor Gobbs are taken into account!
          Oh, how fucked up is "all against all"! It's time to remind us that all for one. Baden's right. The rams are in the electoral minority. Twenty years... ...in the fields, and all for nothing? Now these.
          Some phrases, right on the forehead, but not straight. From a political point of view look real straight. A little more and we accumulate them... according to Gobbs or push them out of our mental space.
          Yes... and finally bury Rousseau with his social contract. It's easier. Easier. Monarchy and the aristocracy, but democracy must remain... illusory. Oh, I know how hard it's become to work.
          But it's more interesting. ... ...it must be incorporated... ...and invite by subpoena and don't worry about it... ...and still, don't worry and push it out of the info field.
          Some are precisely worded and oppositional, but not explicit. Hidden, but so that the ears stick out. An information subpoena, as it were. But at the same time, it's not.
          They hid it behind bad domestic. But with this one, Dream, it isn’t illegal, yeah. They're starting to brainwash the herd. The less they understand, the better! ... Huh, and this should be given to Slava.
          He’ll refuse to take it, and will say something sneaky! To Vasya... ...it'll be fun. A T-shirt to him. Let him... ...and in this one, you certainly shouldn’t talk about electoral authoritarianism.
          And we shouldn't talk about imitations of processes either. Yeah, we're working too transparently. Just put together a puzzle, and they take it all out again! Uh... "Sleep with Trouble"... we’ll live and see.
          So who's baron de Vries here? ... They'll soon think of Easton. Damn ... you influenсers! Bernay's bloody children! And the public inquiry is felt ...that's how the base gets bigger! Let's expand.
          Belanovsky predicted all this correctly.`,
          'In the opinion of an art historian',
          `It's a remarkable project. Here you can clearly see the project component. Looking ahead, we can assume that the series has quite an interesting history, taking into consideration the distinct but hidden
          social component. This clearly articulated liberally democratic component may become the answer to the public inquiry of an emerging civil society, but not here. However, it should not be compared to a
          formalized product under the Banksy or Warhol brand. A powerful expressive component, which resembles a frank Basquiat and a bright, meaningful development of Klein's methods, is also present.
          The project is completely independent, but somehow very familiar. And how many similar expressive components can you still find? I think quite a few. Let's at least remember Tracey Emin's conceptual experiments.
          It's an explosive brew, in a word. However, It is important to note that it's a completely original positioning. The concept is very capacious, with all the signs of an infinite continuation in new images and
          messages, right down to memes. New traits for the art market are clearly emerging. On the heels of success of press ads and billboards the stylistic approach with body copies, tags and headlines in the aesthetic
          solution fixes an entire era. There is a clear structure in the construction of communication. It is quite typological. Its distinctive feature is taking the language of the advertising message and transforming
          it into a sign. Keen understanding of the difference between art and advertising is worth noting. The series is akin to street art. And it is the very language that makes messages so clear to understanding.
          Images are scaled up easily and quite adaptable to the world web. Perhaps it will provide easier identification the project across social media channels. The very concept of a nonstop dream adequately reflects
         the sleepless pastime surfing experience on the world web during the pandemic. And, by the way, it seems as if extracts one of its most emotionally attractive components - sarcasm and irony with longstanding
         ambiguous interpretations. A very lively emotional component lies on a well-prepared and fertile ground of constant search for new and living. We are bound to note the potential that is embedded in the project.
         It is truly infinite and can mimic well under the changing social agenda. For all the sanctification of the theme of sleep, everything looks quite meaningful and extremely conscious.`,
          'In the opinion of an art dealer',
          `Limited edition. Diverse. Abundant. And decorative. And stylish. And some are very, very. You can sell it  straight from the workshop. It's good taste. Black is always in vogue. In the trend of minimalistic
          colour in interiors. And lofts in style as an emotional spot. And in cold minimalism as the accent will keep the walls in contrast to the decoration. It's perfect as a gift. Shock! Unforgettable!
          It's very expressive and breathtaking. And the classics to be put in front of busts or sculptures. Ooh, bedlinen! A psycho ward at the hotel! You get a pair or three, it will be paid back three times.`,
        ],
      },
      {
        name: 'meaning',
        title: 'Evasive/Elusive Minings',
        quote: 'Il simile attira il simile.',
        text: [
          `In a velvet-shaded space, I can hear a whisper.
I can see familiar and marble faces
Through darkness gently moving into the silent world.
You, like a flash, light up my mind
And in an moment total blackness hides the meaning of your words.
A face or profile, a look or lips that are wide open,
Drop a word, and then another one…
Will never be recalled the phrase that slowly vanishes.
Your mind tries to grasp the meaning.
Creators of immortal myths show up in front of me,
You cannot fall asleep - you stay awake.
And there is no rest in heaven or in hell.
Not we, but you look into our eyes.
The blood in our veins runs cold.
These marble faces are before me.
Before me - passion … and the power of thought.`,

          'Somehow I want to write about the project in which the talents of highly experienced  men and images of recognized men of genius are woven together. The whole story is soaked in syrup or molasses of irony and sarcasm.  An ode or a requiem to human consciousness envelopes your mind and plunges into a surrealistic action.',
          'The thoughts of the elusive age. They are put in the mouths of philosophers and masters of souls. Here you are, modern artistic provocation. However, here you will find your interlocutor and, quite possibly, take him with you. What could be more pretentious and fascinating than a conversation with Voltaire himself? There are 220 of them! They will keep your brain in suspense until enlightenment comes! And, maybe, it will make you laugh! ',
          'All these thinkers have carried the light of reason into our lives. What were they thinking, looking at the frailty of being? The creators of philosophical schools, of multivolume works, imperishable folios, the beacons of the Age of Enlightenment, what did they create all this for? And why are they so dear to our civilization? And are they really dear? Are they highly estimated as the ones who formulated and approved the values of humanism or did not express their true thoughts and intentions? What did they dream of seeing social unrest, religious war or fratricide, deceit and greed, epidemics and natural disasters? We who do not scroll through their correspondence, or sit with a candle in dusty archives, will never know. History has turned their personalities into legends! Historians and politicians have turned them into humanitarian weapons for disciplinary states. All we have to do is to try and see more clearly their true faces. Looking from different angles gives us much more. Light emphasizes the signs of thoughts and emotions on frozen faces. Tension and deep emotions have stretched out on their foreheads. Sleepless nights have weighted their eyelids. ... It can be said with a great deal of confidence that the generation fascinated by cosmetology, internet marketing and healthy lifestyle fails to estimate even a hundredth of the influence that these men of genius had on the evolution of civilization. Here are thinkers of thousands of years ago and the distant past. Dust was wiped away from their busts but who will recognize their faces? Someone has heard their names or even read them. This seems to be a recollection of great discoveries, of the time when monuments were erected for scientists, who were tortured at the boards of the Holy Inquisition, burned on fire, discussed in forums or whispered in secular salons, and then carved their sayings in stone.',
          'Today, obscene words cover their busts; their bronze figures are being poured down into gutters with sewage and even decapitated! No! The world is not changing! Burned in life and continue to burn after death! How many of their own creations they burned themselves!',
          'But for us, for those who understand the rules of the game and can create their own ones, all this is more like a quest or a charade! This joke is absolutely in the spirit of our time! And this post-structuralist game of mind, and irony, everything that makes our brain cells spin and strain again and again. It looks like imaginary chess with games unplayed. The actors have made a move! The ball is on our court.',
          'You do not often have to meet the creativity of professionals who “play” with the conscience of the audience. Here is the case when they are frank. They do not sell us anything. They do not make us buy anything. They do not urge us to vote. We are just reminded that our world is a myth. We are shown the mechanism of how a myth created and creates reality. And this reality, in an unimaginable way, slips away from us again and again!',
        ],
      },
      {
        name: 'sociale',
        title: 'Manipolazione Sociale',
        quote: ' ',
        text: [
          'Ah! How out of fashion it is -  to model volumes, to convey the heat of skin, the shine of silk, the gloss of varnish, the moisture of eyes and exact portrait similarity. Or, maybe, the secrets of craftsmanship are irrevocably lost and the words "I am an artist, I see it that way" hide laziness, mediocrity, buffoonery and professional deficiency? Michail Vrubel used to say: "Draw this box of matches! You cannot, can you? How can you draw a woman\'s eye then?"',
          `Alessio Romano's lines cited above reveal his view on relationships. Perhaps this is the key to the motives he was guided by in creating the project. Or, is it the imprint of his personal life experience?
          Perhaps that is the essence of this series of his works. `,
          'I want to share my first impressions.',
          `Expression! Contrasts! The madness of scale combined with filigree precision in conveying the nuances of the character of psychological types – it is the rarest phenomenon even among recognized portraitists.
          Now you can rarely meet such figurative way of painting. It is almost gone! At first glance, everything seems incredibly expressive. But! The external effects - it's like a force drawing your attention!
          Then the master fascinates you with the relations of small forms and elusive emotions of his characters. The manner of painting provokes attention, enchants and plays with your mind, calling into question
          ethical and moral values. He is like Dante of the twenty first century. The same lines in the foreword here are very helpful. Painting is the story of a silent but deadly battle between the descendants of
          Adam and Eve! The battle for Liberté, Egalité... ...money or power.`,
          'Whole layers of human nature are hidden behind that apparent clarity of the plots. However, everything depends on the mood and sophistication of the viewer. Direct references to ancient writings and biblical themes require a well-informed audience. But that is not all. The text on the canvas as the key to understanding the plot! The text and image merge into one unified fusion. Juggling modern idioms and well-known archetypes the author tries to "swing" the intellect of the viewer. The characters start an open dialogue with you! They shock and epate! They break the usual way of perceiving the classic form of painting as well as the perception of a famous event in mythology or history. Heroes address you directly or oppose each other in the exposition. An endless pause before fatal events or another loop of the game with the consciousness of the interlocutor is the plot of the whole series. No, we are no longer standers-by observing fleeting or momentary events of life. The turn of the head, gesture, pose are strained to the limit and gain the power of a symbol. The souls of the characters are naked in front of the viewer to the point of indecency. It opens the door to your subconscious and gives birth to secret thoughts or desires. You begin to clearly understand the true intentions of the heroes of drama or farce in the Del arte comedy. Honesty shocks, stifles your will, but makes you watch. ... I catch myself on thoughts that I admire and protest at the same time. That sounds like masochism! There is no longer an obstacle between you and the canvas. Now you can almost hear the voices of the characters, feel the scents of the bodies and expensive perfume. The review of the project reminds you of dancing with something devilish. Dancing with the Devil, you do not change Him, He changes you. You are at the mercy of Demonic obsession! Shakespeare\'s lines come to your mind, "Hell is empty, all demons are here!" And you are among them. It is getting stuffy! You want to hasten away. But in a couple of minutes, an irresistible desire and fatal force pull you back into the hall, as if to the crime scene. Images drown you among the passions of the revived heroes of the past whom we can meet nowadays, with the only difference that they are dressed in modern clothes. How did the master manage to bring these ancient plots into life?',
          'After a brief examination, you get a feeling that the artist is not concerned about the reaction of the viewer. He is completely indifferent to what they say. He is not only talking to you with his brush. The master torments himself with technical variety. He rivals Boldini, Serov, Sargent, Zorn, Vrubel, Feshin and others. When you look closely, you begin to analyze the plastic language more deeply. You can trace the author\'s desire to grasp the immensity. There are no more scenes from life with biblical connotations. There is something else. A game of contrasts.  Dynamics of spots. Unbridled expression combined with the highest skill of modeling. Passion, pressure and tenderness! Energetic charging of strokes by a mastermind and virtuosity in texture conveyance. The velvet and porcelain of the human skin, the brittle forms of the starched shirt, the transparent veil of lace and the moist sharpness of the lacquer shoes, the burning eyes and the cool shine of metal on the accessories in contrast to the texture of wool excellent dressing. All these are not just capturing reality. Everything has been experienced by the author, has been composed, passed through the aesthetic prism of the master, exaggerated and thrown into your face. The layers of colours keep pulling to touch them. Densely applied tones and nacreous shades of silver set your teeth on edge. Glass glare blinds, giving birth to physical pain and the desire to shut your eyes tight. Cheeky, pushy and virtuoso boldness of wide strokes carries away and twists your consciousness like a tornado! No, the painter does not try to impress you. It is as if he hears Vrubel\'s words about how to convey the feeling of colour only in whiteness and soot. It is true. Due to a special technique of light shades the fabric acquires a warm hue, and the shadows become cold and distant. The eye itself adds colour to the objects. Now here, before us, there are not black spots, but blackened blood bled next to the young porcelain body of a girl. The master does not care that many consider that figurative art is out of fashion and "dusty antique". Under his brush everything comes to life and lives some particularly sophisticated animal passion. ',
          'Two tones! Light and darkness! Maximum limitation of means of expression - is the choice of the author. The cynicism of the messages tickles the brain-cells and tears the heart apart!  Brush pirouettes are like legendary Paganini playing on a single string! They awaken your imagination and hit right through the heart. This hurricane of meanings challenges your soul! It powerfully attracts and repulses arrogantly and unceremoniously. It ruthlessly epitomizes and provokes. No, there is no obscenity, but there is a shameless game of razor on the nerves of spinal cord and naked heart! This infinitely rising tension anticipates only one thought! ... When you find yourself in front of it, you freeze up as if blade-pierced! The blow is inevitable and most treacherous! You face a choice! Cynical, yes! Insidious- oh, yes! Your feelings and consciousness protest! But the outcome is so unexpected and at the same time so obvious! No, no, you are not in front the faces of the Saviors – a man and a woman, you are in front of the barely covered truth, in all the senses, the truth about relationships. It is not you looking at the crucifixion, it is your consciousness crucified on the canvas. However, you can tell yourself that this is not of your concern, but the final scene will inevitably emerge in your consciousness for the rest of your life, so that decades from now, you will appear for the last time before your mind’s eye and crush your soul or be overthrown. You yourself will find the answer to the question “Who was crucified?” - You were crucified on somebody you love or you yourself became a cross for your beloved one!',
          `The author is endlessly harsh describing the spirit of our time: manipulations! We are  manipulated. Everybody manipulates. We do not see the world as it is. We only see what we are searching for.
          We see the world as it is. We see reality, but not with our own eyes, but through the glasses of opinion leaders. What is it? Honesty or a game of honesty? Now that you look around you with renewed eyes,
          will you accept this truth? Lies of wives and husbands, deceit and betrayal of beloved ones. Would you say that all these nightmares have tormented not you but the artist? But how should you deal with biblical
          stories? Maybe you should not take off your pink glasses. But it is too late! The worm of doubt is already eating your brain, causing an intolerable itch. It is too late! The artist's view on the relationship
          has become truly yours. What you see is impossible to forget. All these conscious or unconscious manipulations are right in the palm of your hand. They are everywhere, in the office, in front of a fireplace,
          in a cafe, at a presentation, at a business meeting or on a secret date. One thing is fascinating - you are well aware of it. But what will you do about it?`,
          'PS Age limit - 44 +',
        ],
      },
      {
        name: 'gravitation',
        title: 'Gravitational Singularity',
        quote: 'Quidquid tempus dictum sit altum sonatur.',
        text: [
          'Gravitational Singularity. The project is a logical development of the theme of elusive and changing spiritual values of humanity. Everything in this world is subject to transformation and modification. Change is a permanent process. Time! For centuries Time formed the multilayered structures underlying the formations of civilization. But eternity is not limited to the space of only one planet. There are processes that are more global. The processes taking place in the universe. They are beyond the control of human will. Whether we like it or not, they are fatal and irreversible in affecting our world. Appealing to astronomy and celestial mechanics is an attempt to transcend everyday life. The more we know about cosmic bodies, the clearer we understand our fragile existence. Everything created over thousands of years can be erased from this world in an instant. The great wall of the universe, galactic threads, voids. The discovery of the asteroid belt and asteriods like Apophis can be terrifying and change our civilization. Thus, we understand that the universe will continue existing and nobody will remember a lonely planet in myriads of trillions of stars. What will remain in these wastes of space? Dark matter? Time! Only Time, shrinking or stretching to infinity. It flows smoothly and envelops the entire universe. It either accelerates or slows down under the laws of gravity, but it never disappears. Maybe that is why space is not measured in kilometers - it is measured in billions of light years. Time is the measure for exoplanets, for the distance between constellations, for human life that flashes for a moment in the infinitely endless space of the universe.',
          'In front of us is the Time to express the gravitational singularity. The point of no return beyond which everything will be completely different. You look at familiar images... ...and you can see them transform. Dynamically or smoothly, unexpectedly but controlled. The digital mandalas of spiritual quest are in motion. They are frozen for a moment in their transformation. Space listens to you. You come closer to see the details and ... the details are beginning to approach you! This attraction is mutual. The world of images was so familiar until a certain moment when you were immobile. But, everything, literally everything, slipped into the accretion disc of gravity. The flatness came to life, breathing! It seems as if something from another universe is trying to penetrate our dimension! The familiar interweaving of signs and coincidences has already begun to move, and now it will fall apart. The flatness of stopped moments begins to stretch and curve endlessly. You physically attract this matter of time to yourself and ... let it go. The time of spiritual values begins to shrink to a point. The geometry, perfectly structured, deforms and possibly represents an entrance into parallel universes as in "M" theory or Theory of Strings. Involuntarily assumptions about mole holes, time tunnels and gates into parallel reality come to your mind. The membranes of this universe give you an impulse from another world. It seems like you are about to step into the unknown or ... the unknown will flow into your room. It is like watching a slow motion video or watching the vibration of huge speakers. Another body movement and a new wave of distortion is rolling over an already three-dimensional surface fading in the corners. After a brief observation, you turn your eyes to the floor. It seems to be moving. It is a residual movement in our consciousness. It makes the tiles on the floor go away from under our feet. It looks as if you are about to fail. That is the moment when you stopped trusting your consciousness. Cognitive connections have transformed; and it seems that you are capable of going through a wall. It looks as if everything emphasized and gave you a sense of illusiveness of three familiar dimensions! It is like a dizzying sensation at the moment of awakening! Or, do people feel this way at the moment of going over the Divide? ',
          'And what about Time? The signs of Time - melted and distorted. You are as if before a protracted jump into nowhere or after taking a psychotropic drug and ... you spread your hands  trying to find a support, and grab a companion standing by. A moment! Adrenaline rush. With an uncertain gait, you are heading for the door, but you still feel wobbled up behind it. It seems as if the flat faces of people are about to start stretching and turning into alien faces. Perhaps that is how you feel on the horizon of events? There is not even a drop of alcohol or illegal substances in your blood. But the effect is the same. How amazing our consciousness is.  Perhaps this is what a journey on the event horizon looks like, with the only difference that you can still decide for yourself whether to stay in this world or step into a parallel universe!',
          `But we are fed up with emotions. Let us look at the project from a different perspective. Romano's creative activity, as I see it, is an evolutionary path from early last century modernism and Art Nouveau
          to modern digital conceptualism. I suppose that the aesthetic roots of the project go even deeper, in the era of refined Baroque. But I still find a significant difference here. Everything in front of you,
          to a large extent, does not require special explanation and long-reads, explaining what the author thought and in what mazes of his fantasy he carries us. No, no. There is no need for titanic intellectual
          efforts. Everything is caught on some super subconscious level. The author sets the direction for the development of his thought very clearly each time. However, the message is very multi-layered.
          From the visual “wow” effect to complex reflections on the quantum theory. Alessio's work is firmly embedded in the existing narratives, from Malevich's Supremacism, Vasareli's Op Art, to Riogi Ikeda's
          experiments and Okavaro's native conceptualism. It seems that it has absorbed the whole path of conceptual thought and now represents a perfectly natural round of humanitarian practice.
          The peculiarity is that there is no antithesis or destruction of the past. There is no parasitism typical of postmodernism. There is a smooth transition to the space of new interactive art built on the
          classical, I would even say, academic canons of creating a visual image. All of this is an amazing flow of quarks of thought, which, passing through the grid of consciousness produces the effect of bizarre
          interference on the boundless field of contemporary art. The very method of using the object ready-image (the interface of the gadget screen) reminds of the principles of Marcel Duchamp and John Cage.
          Creating the imprints of consciousness and fascination with aesthetics, Romano at the same time emphasizes the illusiveness and conditioning of habitual perception. The essence of the project is to reveal
          layers of meaning and to destroy them. Time, space, dimensions, gravity, attraction and consciousness of the observer. Perhaps it is not a metaphor or mandala unfolded on the plane that is important,
          but the state of mind, Deisis before something undeveloped, the beyond. The author refers not only to our consciousness, to cultural, visual and intellectual codes. The author appeals to the Super Self.
          He wants to convey the state of the observer of the evolution process from the perspective of Giorgio Vasari, to the optical research of Vasareli and the graphemes of Atlas, a street artist.`,
          'At the same time, refined ornamentation brings back memories of the art of the late 19th century. The relationship between dark and light is fascinating to the eye. You can travel endlessly in the labyrinths of contrasts and magical coincidences of digital combinations shrouded in mysticism. Intricate patterns create gaps in space on the flat surface and almost tangible volumes on which Time looks particularly convex and significant. But, in reality, neither of them exists. All this is about a Measurement that cannot be re-created, but can be transferred to its quintessence. There is something performative about it. It is about Time and consciousness that is in motion and comes from non-existence to infinity. A psychedelic state. The flat surfaces are breathing and compressing air inside the exposition space. This breath passes down to us and we begin to breathe in unison with Time. The breath of Time! The breath of eternity in every moment before the imminent disaster in 2029 or 2036/54? Is it a Prediction?',
        ],
      },
      {
        name: 'hallucinatio',
        title: 'Hallucinations',
        quote: 'Quidquid lex dictum sit altum sonatur.',
        text: [
          `Against a colourful background of contemporary art pursuits, from abstract expressionism to interactive artificial intelligence and actionism projections, the entire series looks like a vintage artifact
          stolen from the Vatican's sacral shrine. Its value is not in the perfect frame of the Renaissance craftsmanship, no, not only that! Its value is in the diamond purity of thought piercing the mind of a
          sophisticated philosopher or ruler. Only he who is able to realize the depth of the message, who has gained experience in governing, who made decisions, and carried the burden of responsibility,
          risking the lives of others, or the welfare of hundreds of thousands, and throwing them into the jaws of his own ambitions! Whether he is a tyrant or a talented ruler and creator, at the end of his journey
          in this world, casting a glance on the past he (it’s a part of human nature), will invariably be looking for the answer to a single question: How will my descendants, nation, civilized society remember me?
          What trace will I leave in the memory of the Country and in History? Will my works be admired? These are the motives of human nature, avidly seeking eternity and immortality.
          But in this world there is no and will not be unambiguous interpretation of personality, because saints of one religion are enemies and marginals for another, because they do not fit into ideology.`,
          'But what really amazes! It is a dizzying metamorphosis and a revolution in perception. Rapidly climbing the Olympus of Eternity into the host of the gods, eager to create a dynasty and shine of greatness among the men of genius, the chosen, in fact, aspires to survive! To survive in the memory of civilization and to appear in the precious radiance, crowned with a halo! He aspires to continue influencing the development of the world that is beyond his control! History favours only the rulers who are conquerors and builders. Napoleon or Louis XIV. It is told to children in Royal families from the tender nail. Such were Gaius Julius Caesar or Gaius Cilnius Maecenas. Such were the Medicis and the Habsburgs. The reign of many fathers of nations left us either myths about the Hanging Gardens of Babylon, or Papal palaces, great empires of Asia and the newest states without borders – trans-corporations. At the head of everything were they, the creators of ideas, the owners of resources, souls and thoughts. But, here\'s the problem! Not many assumed that History – is a woman so lightheaded and so volatile! For her, there are no axioms! Her addiction is a game! The very process of playing with the souls of the greatest living men! Analysts, orators, historians, technologists and PRs – all of them are her flesh and blood! For History, the world of the living is only good fun, and the audience is figures and pawns! In this game for her, History, everything is possible. It is possible to turn a tyrant into the father of a nation, a madman into a genius, and a saint into a despicable villain who lays out a temple in his own honor from the corpses of his fellow citizens, slaves or friends. This journey to the top of his glory and godliness can lead to a tragic end. A cunning poisoner or a treacherous dagger of a relative, the libel of a collaborator or the guile of an enemy, a stray bullet or a natural catastrophe await everybody on his way to the illusory peak of the gods. Nihil sub sole novum (Nothing is new under the sun). The duality and dichotomy of human nature is to blame. To gratify their ambitions the newest statesmen either put the symbol of the past in the mausoleum and worship them, or throw them into the garbage and put into oblivion. Some of them are kept in "reserve". How should we deal with it? Is it worth putting your life on the altar of vanity and pride? It\'s up to everyone to decide for himself. Sacrality is illusory! Illusion is eternal!',
          `Thinking over this project, one cannot help but notice the crystal clarity of thought and the precision of the wording. Aphorisms and metaphors set the stage for future interpretations and versions of
          the Illusion of the Present. The Latin language and the texture of the fresco, looking like excavated pieces of the cradle of European civilization appear in front of your eyes.
          They are like fragments of a temple. Like fragments of Eternity. Fractures and lost pieces of writing envelope your mind with the scent of Time. Masaccio, Fra Angelico, Andrea Mantegna seem to be left
          under a layer of plaster and in places shone in cracks and chips. In short, the way it is created makes no sense to describe it at all. It has to be seen. It's not just the remains of painted plaster that
          you can touch here. This is where you can touch the thousand-year history of European civilization. Or, to be more precise, you can cast a detached look at the millennia-old history of European civilization.
          Ars lónga, vita brévis.`,
        ],
      },
    ]);
  }

  getPublications(): Observable<IPublication[]> {
    return of([{ name: 'elle', text: textStub }]);
  }
}
