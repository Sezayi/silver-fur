import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const TextPage = () => {
  return (
  <>
      <SEO title="TEXT" />
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-small"
      >
        <motion.div className="content" variants={item} transition="easeInOut">
          <h1 className="text-5xl tracking-widest">LIVIN IT</h1>
        </motion.div>

        <motion.div
          className="content"
          variants={item}
          transition="easeInOut"
        ></motion.div>

        <motion.div
          className="content font-bold"
          variants={item}
          transition="easeInOut"
        >
          <hr className="block my-8" />
          <p>
            A conversation between Passama/Langendijk and Femke de Vries on
            24/03/2020
          </p>
        </motion.div>

        <motion.div className="content" variants={item} transition="easeInOut">
          <div>
          <p>
            We had been in touch about their project quite a while ago, maybe
            even 1,5 years, and only via mail. So, it was nice to finally talk
            in real life about how this work explores the many dimensions and
            meanings of fur: fur as an heirloom, as a rich material but also a
            symbol of wealth, power, animal cruelty, glamour and heritage. The
            pieces that were developed throughout the process are not structured
            like a traditional fashion collection but take the shape of a series
            of 5 coats, several jewelry pieces, a pomander and scent. Each item
            explores certain values and ideas around fur.
          </p>
          <p>
            This is the second project that fashion designer Barbara Langendijk
            and jewelry designer Noon Passama work on together, and some items
            from the first project continue in this one. In the first project,
            Noon made some cast metal elements and combined silver with
            technical textile. She described the result, that in a way resembled
            fur, as Silver Fur. These items and its title brought up an
            interesting dynamic between the general fastness of fashion and the
            durability of jewelry. So, with this expression, the project began.
            Right after our talk I went to the Apple store to have my laptop
            fixed. While I was walking up the spiral staircase, a woman wearing
            a fur coat was walking up the stairs right in front of me. It was an
            old fur coat.
          </p>
          <p>
            At the height of her bottom the hairs were worn off and the
            v-structure of the fur parts became visible, showing the intricate
            technique. The worn-out state of the coat was in great contrast with
            the shiny glass and marble interior of this store full of high-tech
            devices. I ended up sitting opposite of her at a table waiting for
            an employee. She was, like so many fur-wearers today, not a
            bourgeois, glamorous rich lady but a young woman in her 20’s with a
            sporty cap on. I could picture her at a vintage store taking the
            coat from a rack full of old fur coats surrounded with T-shirts,
            sweats and jeans. Disconnected from its luxurious history. The girl,
            combining the sporty cap with the fur coat, made me think of Kim
            Kardashian, someone who combines sportswear and luxury items easily,
            and who Langendijk and Passama visualized on one of their coats. The
            next time we meet is online and I tell them about my encounter with
            this woman.
          </p>
          
            <hr className="block mb-6 mt-8" />
            <h2>‘ELITENESS’</h2>
            <hr className="block mb-8" />
            <p>
              F: I was wondering how you decided who to
              visualize on this particular coat. How did you choose?
            </p>
            <p>
              P/L: We made a collection of images with
              celebrities who have contributed to today’s popularity of fur.
              They are all celebrities, but from different fields of work. But
              they do have the same way of wearing fur; big, glamourous and over
              the top. The selection of celebrities encompasses Melanie Trump,
              Lady Gaga, Snoop Dogg, Kim Kardashian, Kendall Jenner, Justin
              Bieber and Rihanna, and we have more. All of them are sporting
              these over- the- top big fluffy fur coats worn with exaggeration.
              They represent glamour. These images were actually easy to find,
              the first ones that pop up. In the pieces that we made we didn’t
              want to exaggerate but these people definitely do. By putting them
              together it shows the exaggeration of these big personalities with
              impressive coats in a bit of an ironic way.
            </p>
            <p>
              F: This idea of celebrities wearing fur coats
              shows the connection between elite and fur. As we discussed
              earlier, I’m not an expert in fur, but am interested in it as a
              cultural symbol. And one of the things fur clearly states is
              wealth. It was interesting to read in The Berg Companion to
              Fashion that from the fourteenth to the seventeenth century, the
              kings and queens of England issued royal proclamations in order to
              regulate fur. These royal proclamations became part of what is
              known as “sumptuary legislation” in which everyday practices
              involving clothing, drinking and eating were subject to public
              governance.
            </p>
            <div className="relative italic text-2xl mb-8">
              “Thus, from very early on furs and fur garments were regulated,
              not only in order to establish a hierarchy in desirable fur, but
              also to create recognizable codes of social status in the wearer
              of fur.”
            </div>
            <p>
              So, fur is not just for the elite because it was unaffordable for
              the ‘common people’, it was also decided upon by royal rules.
              Another important circumstance that contributed to fur being a
              symbol of wealth, is when fur entered the world-wide trade. In
              1670 Hudson’s Bay Company was granted the Royal Charter from king
              Charles II, meaning that they gained the right and power to trade
              fur. “Hudson’s Bay has played an essential role in the fur trade
              which was established in the sixteenth century between France, and
              then England, and the New World (what is now Canada). It led to
              fur circulating abundantly among nobility as well as among a
              rising mercantile class of consumers as distinctive sign of class
              and imperial wealth”. Of course, fur has a rich history existing
              long before (and also alongside) Western royalty and Western trade
              systems came into being, but when it’s wearing became determined
              by royal rules and fur became a world-wide commodity, it started
              functioning in a system beyond local indigenous tribes and with
              that also started reaching more people and various layers of
              society. Whereas today more people might be able to afford a coat
              with a fur trimming, the idea of fur as an elitist garment still
              strongly exists. Now not because of sumptuary laws but because its
              expensive and because it has always been, and still is, a symbol
              of wealth and glamour. The idea of wearing a fur coat on track
              pants or with a sporty cap, like the woman in the Apple store, is
              something that strongly represents our time, in which we mix
              street- and sportswear with high-end luxury fashion items. It is a
              game between ‘high’ and ‘low’ culture, between being elite and
              hinting or challenging ideas around ‘eliteness’, high fashion and
              wealth. Again, an interesting quote from the Berg Company Of
              Fashion mentioning that in 1926 there were debates in the British
              House of Commons over the benefits of socialism in providing women
              with practical and affordable cloth coats against the excesses of
              capitalism represented by a luxury fur coat, (…). This in response
              to a time (1920s) that “saw the image of the fur-clad woman emerge
              as a sign of unevenly distributed economic wealth”.{" "}
            </p>
            <hr className="block mb-6 mt-8" />
            <h2>INSIDE - OUTSIDE</h2>
            <hr className="block mb-8" />
            <p>
              P/L: Deciding which images of fur-wearing
              celebrities to use wasn’t easy because on a photo its often hard
              to see if it’s real fur or not. Which makes you realize that, in
              order to know if it’s real, you actually really have to touch it,
              open up the hairs or burn and smell some hairs. It’s similar with
              this coat that we made with the celebrities on/in it. It looks
              like hair but the hairy structure actually exists of yarns, long
              floats. We first learned about this jacquard weave, from an
              interest in the technique. But then we noticed that the long
              floats from the weave looked like hair. Jacquard is a technique
              that is used to weave dessins. It is easy to recognize because of
              the big difference between the two sides of the fabric. One side
              has a clear dessin, the other side shows the floats that jump to
              new spots in the weave leaving a messy look. These long floats
              resembling hair on the ‘inside’ of the fabric and the clear
              depiction of the celebrities on the ‘outside’, invited us to use
              both sides of the fabric. A reversible coat.{" "}
            </p>
            <p>
            F: This reversibility is very interesting as it relates to early
            habits in the wearing of fur and how fur relates to social status.
            In the early period of fur trade in England the “fur was mostly worn
            on the inside, visible as a trim on the collar and cuffs. But during
            the late nineteenth century and throughout the twentieth century,
            fur became increasingly identified with elite women’s fashion and
            the fur coat was now “reversed” in the sense that fur was now worn
            almost exclusively on the outside.</p>
            <p> P/L: With jacquard, the floats
            are supposed to be on the inside and these celebrities that are
            woven into it are people who are normally clearly out there,
            visible. So, it was interesting to create this dynamic between
            inside and outside, visible and invisible. </p>
            <p>F: Fur is something we
            flaunt, it is something that’s clearly shown. And it is interesting
            to see how celebrities, as the new elite, are very visible in the
            media and with that create a certain meaning for the fur coat. </p>
            <p>P/L:
            Yes, the representation of fur in the media is very interesting, it
            led to this coat we made with words on it. We collected texts that
            describe fur coats on sites like Matchesfashion.com, Mytheresa.com
            and 24s.com. Like the celebrities, the type of text that is used to
            describe fur contextualizes it. As you also mention about text and
            how it’s a material to work with. </p>
            F: Yes, the words you use to
            describe something also creates value. Words are in that sense a
            material to create meaning with. The words connect the fur to a
            broader societal/cultural context. What kind of texts did you use?
            P: I just now sent you the list of the selected sentences that we’ve
            put on this coat. It includes sentences like: “A sophisticated edit”
            “The grandeur of fur” “Adds daytime drama to any look” “Conjures
            fantasy, glamour and couture” “The label's love of drama”. 
            
            
            <p>F: Wow,
            this is so interesting. The words ‘sophisticated’, ‘grandeur’,
            ‘fantasy’, ‘glamour’, ‘couture’ and ‘drama’ clearly link to the idea
            of this elitist woman and the excessiveness of her lifestyle and the
            coat itself.</p> 
            
            <hr className="block mb-6 mt-8" />
            <h2>THE HUNT </h2> 
            <hr className="block mb-8" />
          
            
            <p>F: What is interesting is that there are also
            sentences connected to hunting in there. I noticed the following
            ones: “A Trophy Piece” “A true collector's item” And when
            researching celebrities and fur I found the following header for an
            article on a website of a fur company: “Kim Kardashian loves fur.
            She is a fashion assassin; she kills in anything she wears. Kim is
            the focal point of millions of would be fashionistas worldwide”. So,
            besides fur being linked to elite it is also connected to the
            hunter, the hunt. The hunting of the rare, the exclusive. These
            texts clearly show how various forms of power come together in fur.
            Besides that, these texts both apply to a garment and an animal at
            the same time; the rare animal, which is being hunted, is seen as
            prey and as a trophy piece. The fur coat as fashion item can also be
            seen as a trophy piece, that someone has hunted for and now wears
            it. It is interesting and painful to see how the hunt and killing of
            animals is objectified and connected to glamour and power. </p>
            
            
            <p>F: This
            one I believe is also specifically interesting: “Live in it” We
            could interpret this as in ‘the coat being so nice and durable that
            we not just wear it, but we live in it’. But for me it is also about
            the idea of living in someone else’s coat. It reminds me of sleeping
            in an animal’s carcass like Leonardo di Caprio does in the Revenant
            when he crawls into a dead horse, and Luke Skywalker in Star Wars
            sleeping in the belly of his dead Tautan, and of course of Hannibal
            Lector wearing someone else’s skin in Silence Of The Lambs. An
            animal’s coat, or let’s say, a coat of another being, literally
            changes into a human’s coat. To stay in the language area: when you
            wear a coat made of fox or mink hide you would say ‘I’m wearing
            fox’, or ‘I’m wearing mink’. The garment is literally named after
            the animal. It changes the concept of this well know question; ‘who
            are you wearing?’ This dynamic of the coat, moving between various
            beings, also brings up the thought of women wearing fur coats and
            holding their small dogs. The coat of the dog will gradually
            continue into the coat that the woman is wearing, made from mink, or
            maybe even dog, as that is a commonly used animal in China’s fur
            industry. The woman and the dog have a loving relation, but there’s
            a weird and dark dynamic between the three of them. Dog-women-dog.</p>
            
            <hr className="block mb-6 mt-8" />
            <h2>CULTURED </h2>
            <hr className="block mb-8" />
            
            
            <p>F: Next to the hunter who hunts animals, another layer of
            power is added when you think of how the fur trade went hand in hand
            with colonial powers. As mentioned before, fur trade became an
            important economic unit for the mid-sixteenth century to the 1870’s.
            By granting the Royal Charter to Hudson’s Bay Company (HBC), HBC not
            only got this position in the fur trade but also gained ownership of
            all the land drained by the rivers flowing into Hudson’s Bay (…)
            this area covered approximately 40% of modern Canada. “The Hudson’s
            Bay, a company that is known for its colonial power, deliberately
            pushed away first nations communities, taking over their natural
            trade. The history of the fur trade and fur garments is in many was
            a history of imperial class distinctions but one that is also marked
            by gender and cultural differences”.</p>
            
            <p>P/L: And this sentence is also
            interesting: “For an afternoon at a modern art gallery” You have to
            be rich and to appreciate art to wear fur. This creates so much
            context. Fur is thus connected to being artistic and cultured. </p>
            
            <p>F:
            Which is quite crude when we think of colonial powers and how they
            effected the ideas around ‘being cultured’.</p> 
            
            <hr className="block mb-6 mt-8" /> 
            <h2>TEXTURE AND TACTILITY</h2> 
            <hr className="block mb-8" />
            
            <p>F:
            Throughout the process you have explored various values connected to
            the fur coat but besides that you also clearly explored tactility
            and texture using various techniques. </p>
            
            <p>P/L: Yes, the coat with text
            on it for example doesn’t have text on it just to read it, the text
            also creates texture. Using the same jacquard technique as the coat
            with the celebrities on it, the woven texts are not just 2d and
            readable on one side, but they also create a hairy structure, due to
            the long floats, on the other side. Another technique that we are
            exploring is knitted fur! I will show you a fabric swatch. It is an
            intricate knit that is based upon scans of real fur. It is a
            transformation from a dense 3d tactile material to a flat technical
            material. Again, a translation that challenges one of the main
            traits of fur, in this case its thick, fluffy character. </p>
            
            <p>F: Besides
            exploring the texture and tactility of fur, you have also explored
            other forms. </p>
            
            <p>P/L: Yes, to explore fur from another dimension and the
            many ways in which it can be experienced, we made a scent which goes
            together with a paper coat and a paper pomander. </p>
            
            <p>F: How did you
            decide what the scent should be like? </p>
            
            <p>P/L: It was quite a long
            process to find the right scent, because: what is the smell of fur?
            For us it started with the idea of the heirloom, an older fur coat
            which is worn by your grandmother or your mother for example. ‘The
            granny fur coat’ we called it. So, it’s like an old vintage perfume.
            And the scent is more like an impression of fur than to imitate the
            smell of the animal itself. </p>
            
           <p> F: What kind of brief did you sent the
            perfumer, how did you specifically describe what the scent of fur is
            to you? </p>
            
            <p>P/L: He asked us: what kind of impression do you get when
            you smell fur? We described it like a soft smell and something
            animal-like with something glamourous. When you make a perfume, you
            work with various so-called layers and notes. We wanted the base
            layer to be from an animal, or an animal-like smell. Then we wanted
            the top notes to be sweet and glamourous. But we didn’t want it to
            be too animalistic either. Sometimes it got a bit too animally, like
            a Civet cat. Yes, there’s one ingredient which is called Civet cat
            and it has this really penetrating smell. We thought it was super
            interesting because it was so very present and could represent the
            concept of maybe being overwhelmed by this whole idea of big fur
            coats. We also thought about incorporating that element, of being
            overwhelmed, but eventually we toned it down a bit. </p>
            
            <p>F: Interesting,
            this idea of layers in a scent. It’s like literally begin dressed in
            layers: A woman wearing a fur coat, let’s just say an animal, and
            then she sprays her sweet perfume as notes over it. </p>
            
            <p>P/L: Yes, it is.
            And when you think of it, a fur coat is something you wear and a
            perfume is also something you wear. We use the same term for a
            garment as we do for a scent. And thus, by wearing this perfume you
            can wear fur. They are both worn like a luxurious item. With the
            scent we also made a paper pomander and a paper coat. Both are items
            that can carry the smell. We chose paper because when you test
            perfume in a store, you get a small paper strip on which the perfume
            is sprayed. The look of the paper coat and the paper pomander both
            hints towards the texture of fur. </p>
            
            <p>F: The paper pomander actually
            also looks like an animal’s tail, as it is a long cord with a dot of
            ‘hair’ at the end. P: The look of the pomander, made from hair like
            cut-outs from paper, refers to the look of fur and therefore gives a
            hint of what to be expected when you smell it. Pomanders were
            originally also often richly decorated and made from expensive
            materials, therefore it also became a status symbol of the elite.
            The idea to make a pomander from paper, a ‘worthless’ material also
            questions this. </p>
            
            <p>P/L: Together the pomander, paper coat and scent
            make it possible to wear fur without really wearing it. </p>
            
            <hr className="block mb-6 mt-8" /> 
            <h2>DURABILITY</h2>
            <hr className="block mb-8" />
            
            
            <p>F: This idea of the scent of a ‘granny fur coat’ hints to the
            concept of the heirloom, and as you mentioned before, vintage. An
            heirloom is something we value highly as it carries stories of
            previous lives, it can be a symbol of connection between
            generations, families and loved-ones. The heirloom is an object that
            is granted a longer life than most objects. </p>
            
            <p>P/L: When we started the
            project, we described it as a research into sustainability and
            durability. Durability is a better word for it than sustainability.
            The fur coat lasts long and has great monetary value, therefore it
            is a garment that can easily function as an heirloom. The same goes
            for jewelry. As mentioned before, the project started from this
            connection that we saw between fur and jewelry. So, the first item
            that we made in this project is this coat with silver elements, a
            ‘silver – fur’ coat. The silver jewelry elements that resemble hair,
            create the look of a furry texture, and are placed on a padded
            material that hints to the fluffiness and density of a fur coat. So,
            this coat connects the fur coat as heirloom and jewelry as heirloom.</p>
            
            
            <p>F: As you mention, considering a garment as an heirloom questions
            our fast-fashion industry of quickly discarding garments due to a
            lack in material quality and constant changing styles. On a personal
            note I do think it is important to know that durability is also
            something the fur lobby today is using to promote fur. Saying that
            it’s biodegradable and ecological. Opposite messages point out the
            many chemical processes are involved to preserve the skin from
            falling apart. In general, we have to take into consideration animal
            rights within our ideas around sustainability and durability. Do we
            really believe cruelty against other living beings is durable? I do
            believe, as you explore in your research, that approaching a garment
            as an heirloom would surely change our perception of garments and
            could change the fashion industry. There is some movement in Noon’s
            screen and she introduces her dog to us: Moon. Moon has short flat
            hair. She settles down next to Noon. We continue our conversation
            while Noon pets Moon.</p> 
            
            <hr className="block mb-6 mt-8" /> 
            <h2> DRESSING UP</h2> 
            <hr className="block mb-8" />
            
            <p>F: When you asked me to write a
            text about this project I also had to think about my childhood. We
            used to have a big box full of garments to dress up in. In it there
            was this kind of shawl made from three matters attached to each
            other. The claws were still on there and their eyes were replaced by
            wickedly placed small dark beats. I was intrigued by it, repulsed
            and curious at the same time. This idea of dressing up also made me
            think of dressing up into an animal or turning into an animal. I
            referred to crawling into carcasses and wearing skin earlier in the
            text, but this summer I read this book Putting On The Dog, about the
            animal origins of what we wear and it explains how various
            indigenous and native peoples have a strong history in wearing
            animals hides during the hunt. “Dressed up as animals (FdV: in
            animals) whether feathers, leather or skins they must have seemed
            incomprehensible to other animals, so they had no choice but to
            accept them (…). As a disguise these garments did not call attention
            but deflected it. The hunters were invisible”. Today people wear
            fur, they wear animals in the city, a place where there are no other
            animals, only humans. In this environment fur-wearers don’t deflect
            but become very visible. Today we dress up like an animal to grab
            attention and look elitist.</p> 
            
            <hr className="block mb-6 mt-8" /> 
            <h2>ALTERNATIVES FOR CRUELTY</h2> 
            <hr className="block mb-8" />
            
            
            <p>F: Today fur is
            a strong symbol for animal cruelty “By the 1970s the fur coat was
            transformed from a desirable female commodity to a symbol for animal
            right’s activism” It is undeniable that the fur industry is one of
            animal cruelty. The many ways in which these animals are hunted,
            bred, kept and skinned is something that should’ve been in the past
            since long. For many, fur might resemble glamour and richness, to me
            fur is a symbol of coloniality, capitalism, the elite and animal
            cruelty.</p> 
            
            
            <p>L: I think the awareness is growing in general. I had an
            intern who explicitly said she would only come to intern with me if
            we wouldn’t use real fur. So, the awareness is growing.</p> 
            
            <p>F: Really
            great to hear about such determination coming from a student
            applying for an internship. As you know, due to this focus on fur, I
            was also doubtful to work on this text, but as soon as it became
            clear that you use the values of fur as starting point, and are not
            promoting fur or collaborating with fur producers, I saw the value
            of this research. What I appreciate about this research is that even
            though it wasn’t the goal of the project, the work doesn’t only open
            up a conversation around fur but you also come up with alternatives.
            The work shows that the values of fur (whether ‘good’ or ‘bad’) can
            be incorporated in garments/items in different ways, showing that
            fur is superfluous. I hope our conversation, herewith transcribed as
            complete as possible, therefore creates awareness about the history
            and contemporary implications of fur, and besides that shows the
            explorative and layerdness nature of your work. Creating awareness
            about fur and the dense and layered history of fur is essential to
            reconsider our habits in relation to fashion and how we connect to
            other living beings, and I believe your work does that. As I believe
            the fur coat is a garment not to wear, buy or promote at all I would
            surely say to wear or look at the work of Langendijk and Passama,
            instead. </p>
            
            <p>
            Not sure if this should be in this text, or in a colophon
            on the website. The jacquard textiles: Milou Voorwinden and Suzanne
            Oude Hengel Knitwear: Knitwearlab Perfumer: Frank Bloem (The
            Snifferoo) Tailor of coats: Saskia Stockler
            </p>
            </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default TextPage
