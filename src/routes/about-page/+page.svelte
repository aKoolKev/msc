<script lang="ts">
    import CardComp from "$lib/CardComp.svelte";
    import NavbarComp from "$lib/NavbarComp.svelte";
    import { List, Li, AccordionItem, Accordion} from 'flowbite-svelte';
    import AccordianComp from "$lib/AccordianComp.svelte";

    let generalTopic=["College Algebra", "Intermediate Algebra", "Mathematical Structures for Teachers I", "Mathematical Structures for Teachers II", "Precalculus", "Basic Statistics", "Statistics for Natural Science"];
</script>

<!-- HOME PAGE -->
<svelte:head>
    <title>Math Success Center - About</title>
    <meta name="description" content="The Math Success Center, a free tutoring service provided by Lindenwood University. Tutors available for various university math courses, as well as computer science and physics."/>
    <link rel="icon" href={"favicon.png?v=1"} />
</svelte:head>

<NavbarComp />

<!-- Heading -->
<h1>Meet the Tutors!</h1>

<!-- The tutors -->
<main class="flex justify-center">

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-1 md:gap-2 lg:gap-3 text-center mt-16 mb-5">

        <!-- Mary -->
        <CardComp 
            name="Mary" 
            imgUrl="./about-page-img/Mary.jpg" 
            imgAlt="Image of the director/tutor, Mary">
            
            <AccordianComp generalArray={generalTopic} specialArray={['Calculus 1', 'Calculus 2']} >
                <AccordionItem slot="about-me" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                    <h2 slot="header" class="mx-auto font-bold text-xl">About Me</h2>
                    <List tag="ul" class="black-color text-left leading-loose">
                        <Li><span>Major:</span> Obtained MA in Mathematics, MS in Education, BA in Statistics, and BA in Economics</Li>
                        <Li><span>Hometown:</span> Grew up in Aurora, Colorado, and have lived in St. Louis since 2019</Li>
                        <Li><span>Favorite math course:</span> Statistics made me first fall in love with math!</Li>
                        <Li><span>Favorite thing about math:</span> How it is one of the oldest disciplines and the language of science!</Li>
                        <Li><span>Fun fact:</span> I have three little guinea pigs and a big, bad wolf (Chihuahua).</Li>
                    </List>          
                </AccordionItem>
                <AccordionItem slot="availability" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                    <h2 slot="header" class="mx-auto font-bold text-xl">General Availability</h2>
                    <p>M T W R F</p>
                </AccordionItem>
            </AccordianComp>

        </CardComp>

        <!-- Brooke -->
        <CardComp 
            name="" 
            imgUrl="" 
            imgAlt="">
            <AccordianComp generalArray={generalTopic} specialArray={['Calculus 1', 'Physics']}>
                <AccordionItem slot="about-me" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                    <h2 slot="header" class="mx-auto font-bold text-xl">About Me</h2>
                    <List tag="ul" class="black-color text-left leading-loose">
                        <Li><span>Status/Year:</span></Li>
                        <Li><span>Major:</span> </Li>
                        <Li><span>Minor:</span> </Li>
                        <Li><span>Hometown:</span> </Li>
                        <Li><span>Favorite math course:</span> </Li>
                        <Li><span>Favorite thing about math:</span> </Li>
                        <Li><span>Fun fact:</span> </Li>
                    </List>  
                </AccordionItem>
                <AccordionItem slot="availability" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                    <h2 slot="header" class="mx-auto font-bold text-xl">General Availability</h2>
                    <p></p>
                </AccordionItem>
            </AccordianComp>
        </CardComp>

        <!-- Mattie -->
        <CardComp
            name="Mattie" 
            imgUrl="./about-page-img/Mattie.jpeg" 
            imgAlt="Image of the tutor, Mattie">
            
            <AccordianComp generalArray={generalTopic} specialArray={['Calculus 2', 'Computer Science']}>
                <AccordionItem slot="about-me" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                    <h2 slot="header" class="mx-auto font-bold text-xl">About Me</h2>
                    <List tag="ul" class="black-color text-left leading-loose">
                        <Li><span>Status/Year:</span> Student, Sophomore</Li>
                        <Li><span>Major:</span> Computer Science</Li>
                        <Li><span>Minor: </span> Data Science</Li>
                        <Li><span>Hometown:</span> St. Louis, Missouri</Li>
                        <Li><span>Favorite math course:</span> Calculus</Li>
                        <Li><span>Favorite thing about math:</span> The problem-solving aspect and the satisfaction/accomplishment you feel when completing a difficult problem!</Li>
                        <Li><span>Fun fact:</span> I play on the women’s soccer team here at Lindenwood!</Li>
                    </List>
                </AccordionItem>
                <AccordionItem slot="availability" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                    <h2 slot="header" class="mx-auto font-bold text-xl">General Availability</h2>
                    <p>M T W R F</p>
                </AccordionItem>
            </AccordianComp>
            
        </CardComp>

        <!-- Seth -->
        <CardComp 
            name="Seth" 
            imgUrl="./about-page-img/Seth.jpg" 
            imgAlt="Image of the tutor, Seth">
            <AccordianComp generalArray={generalTopic} specialArray={['Calculus 1', 'Calculus 2', 'Physics', 'Computer Science']}>
                <AccordionItem slot="about-me" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                    <h2 slot="header" class="mx-auto font-bold text-xl">About Me</h2>
                    
                    <List tag="ul" class="black-color text-left leading-loose">
                        <Li><span>Status/Year:</span> Student, Junior</Li>
                        <Li><span>Major:</span> Computer Science (BS) & Mathematics (BS) with a Research Emphasis</Li>
                        <Li><span>Hometown:</span> St. Charles, Missouri</Li>
                        <Li><span>Favorite math course:</span> Linear Algebra</Li>
                        <Li><span>Favorite thing about math:</span> Solving unique and challenging problems</Li>
                        <Li><span>Fun fact:</span> I love music. A few of my favorite artists are "My Chemical Romance," "Pink Floyd," and "Playboi Carti."</Li>
                    </List> 
                    </AccordionItem>
                    <AccordionItem slot="availability" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                        <h2 slot="header" class="mx-auto font-bold text-xl">General Availability</h2>
                        <p>M T W R F</p>
                    </AccordionItem>
                </AccordianComp> 
        </CardComp>
            
        <!-- Katherine -->
        <CardComp
            name="Katherine"
            imgUrl="./about-page-img/Katherine.jpg" 
            imgAlt="Image of the tutor, Katherine">
            <AccordianComp generalArray={generalTopic} specialArray={[]}>
                <AccordionItem slot="about-me" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                    <h2 slot="header" class="mx-auto font-bold text-xl">About Me</h2>
                    <List tag="ul" class="black-color text-left leading-loose">
                        <Li><span>Status/Year:</span> Student, Junior</Li>
                        <Li><span>Major:</span> Mathematics for Secondary Education with an unofficial add-on of a certification in middle school education</Li>
                        <Li><span>Hometown:</span> Originally from St. Ann, Missouri</Li>
                        <Li><span>Favorite math course:</span> Algebra</Li>
                        <Li><span>Favorite thing about math:</span> I get to simplify fractions</Li>
                        <Li><span>Fun fact:</span> I love to knit and crochet.</Li>
                    </List>  
                </AccordionItem>
                <AccordionItem slot="availability" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                    <h2 slot="header" class="mx-auto font-bold text-xl">General Availability</h2>
                    <p>M T W R F</p>
                </AccordionItem>
            </AccordianComp>
        </CardComp>

        <!-- Dr. J -->
        <CardComp
            name="Dr. J (Jeevanjee)" 
            imgUrl="./about-page-img/Dr.J.jpeg" 
            imgAlt="Image of adjuct, Dr. J (Jeevanjee)">
            <AccordianComp generalArray={generalTopic} specialArray={['Calculus 1', 'Calculus 2', 'Physics', 'Computer Science']}>
                <AccordionItem slot="about-me" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                    <h2 slot="header" class="mx-auto font-bold text-xl">About Me</h2>
                    <List tag="ul" class="black-color text-left leading-loose">
                        <Li><span>Status/Year:</span> Retired professor, currently a volunteer tutor</Li>
                        <Li><span>Major:</span> Double majored in Mathematics and Computer Science. Obtained a master's and PhD in Mathematics.</Li>
                        <Li><span>Hometown:</span> Born in Munich, Germany, due to my dad being in the army. I have been in St. Louis for 30 years—it feels like my "hometown."</Li>
                        <Li><span>Favorite math course:</span> I love all the math courses. If I have to pick one, Abstract Algebra.</Li>
                        <Li><span>Favorite thing about math:</span> I love math for how logical it is.</Li>
                        <Li><span>Fun fact:</span> I'm equally left-brained (math) and right-brained (creative). I draw and paint.</Li>
                    </List>      
                </AccordionItem>
                <AccordionItem slot="availability" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                    <h2 slot="header" class="mx-auto font-bold text-xl">General Availability</h2>
                    <p>W F</p>
                </AccordionItem>
            </AccordianComp> 
        </CardComp>

        <!-- Bennett -->
        <CardComp 
        name="Bennett" 
        imgUrl="./about-page-img/Bennett.jpg" 
        imgAlt="Image of the tutor, Bennett">
            <AccordianComp generalArray={generalTopic} specialArray={['Calculus 1', 'Computer Science']}> 
                <AccordionItem slot="about-me" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                    <h2 slot="header" class="mx-auto font-bold text-xl">About Me</h2>
                    <List tag="ul" class="black-color text-left leading-loose">
                        <Li><span>Status/Year:</span> Student, Senior</Li>
                        <Li><span>Major:</span> Mathematics, Computer Science, and Data Science</Li>
                        <Li><span>Hometown:</span> Palmyra, Missouri</Li>
                        <Li><span>Favorite math course:</span> Machine Learning</Li>
                        <Li><span>Favorite thing about math:</span> I like math because it isn’t writing.</Li>
                        <Li><span>Fun fact:</span> I am on the Lindenwood baseball team.</Li>
                    </List>  
                </AccordionItem>
                <AccordionItem slot="availability" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                    <h2 slot="header" class="mx-auto font-bold text-xl">General Availability</h2>
                    <p>M T W R F</p>
                </AccordionItem>
            </AccordianComp>
        </CardComp>

        <!-- Kevin -->
        <CardComp 
            name="Kevin" 
            imgUrl="./about-page-img/Kevin.jpeg" 
            imgAlt="Image of the tutor, Kevin">
            <Accordion>
                <AccordianComp generalArray={generalTopic} specialArray={['Calculus 1', 'Computer Science']}>
                    <AccordionItem slot="about-me" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                        <h2 slot="header" class="mx-auto font-bold text-xl">About Me</h2>
                        <List tag="ul" class="black-color text-left leading-loose">
                            <Li><span>Status/Year:</span> Student, Senior</Li>
                            <Li><span>Major:</span> Computer Science (BS) </Li>
                            <Li><span>Minor:</span> Mathematics</Li>
                            <Li><span>Hometown:</span> Born in Brooklyn, New York. Currently from Winfield, Missouri</Li>
                            <Li><span>Favorite math course:</span> College Algebra, as it establishes the foundation and language for all upper-level math courses.</Li>
                            <Li><span>Favorite thing about math:</span> I enjoy the precise nature of math and find it remarkable how it can model anything around us.</Li>
                            <Li><span>Fun fact:</span> I can solve a 3x3 Rubik's Cube with a personal best time of under 30 seconds.</Li>
                        </List>  
                    </AccordionItem>
                    <AccordionItem slot="availability" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                        <h2 slot="header" class="mx-auto font-bold text-xl">General Availability</h2>
                        <p>M T W R F</p>
                    </AccordionItem>
                </AccordianComp>
            </Accordion>
        </CardComp>

        <!-- Jamie -->
        <CardComp
            name="Jamie" 
            imgUrl="./about-page-img/Jamie.jpg" 
            imgAlt="Image of the tutor, Jamie">
            <AccordianComp generalArray={generalTopic} specialArray={['Calculus 1', 'Calculus 2', 'Physics', 'Computer Science']}>
                <AccordionItem slot="about-me" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                    <h2 slot="header" class="mx-auto font-bold text-xl">About Me</h2>
                    <List tag="ul" class="black-color text-left leading-loose">
                        <Li><span>Status/Year:</span> Senior, Student</Li>
                        <Li><span>Major:</span> Computer Science </Li>
                        <Li><span>Hometown:</span> Wentzville, MO</Li>
                        <Li><span>Favorite math course:</span> Probability and Mathematic Statistics</Li>
                    </List>  
                </AccordionItem>  
                <AccordionItem slot="availability" classInactive="hover:bg-[var(--lu-gold)]" classActive="bg-[var(--lu-gold)]">
                    <h2 slot="header" class="mx-auto font-bold text-xl">General Availability</h2>
                    <p>M T W R F</p>
                </AccordionItem>  
                </AccordianComp> 
        </CardComp>
    </div>
</main>

<style>
    h1{
        text-align: center;
        font-size: x-large;
        font-weight: bold;
    }
    span{
        font-weight: bold;
        text-transform: uppercase;
    }
    h2{
        color:#101820;
        font-size: large;
    }
    p{
        color:var(--lu-black);
    }
</style>