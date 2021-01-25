import Header from "../components/header";
import Menu from "../components/nav/menu";
import CategoryAndDescriptionCard from "../components/cards/category-and-description";
import HeadlineCard from "../components/cards/headline";
import CardRowWithShadowContainer from "../components/cards/row-with-shadow-container";
import NewsCardGrid from "../components/cards/news-card-grid";
import Footer from "../components/footer";

export default function HomePage() {
    return (<>
        <Header/>
        <Menu/>
        <section className="px-5 lg:px-24 bg-midnight">
           <CardRowWithShadowContainer>
                <CategoryAndDescriptionCard headline="First A Box" bgColor="yellow"/>
                <CategoryAndDescriptionCard headline="Then Another" bgColor="teal"/>
                <CategoryAndDescriptionCard headline="Looks like we're on a roll here" bgColor="cream"/>
           </CardRowWithShadowContainer>

            <CardRowWithShadowContainer>
                <CategoryAndDescriptionCard headline="A second row" bgColor="pink-600" bgGradientFrom="red-light" bgGradientTo="skyblue"/>
                <CategoryAndDescriptionCard headline="Row Row Row" bgColor="skyblue" bgGradientFrom="green" bgGradientTo="cream"/>
                <CategoryAndDescriptionCard headline="Looks like we're on a row here" bgColor="green"/>
            </CardRowWithShadowContainer>

            <NewsCardGrid>
                <HeadlineCard/>
                <HeadlineCard/>
                <HeadlineCard/>
                <HeadlineCard/>
            </NewsCardGrid>
        </section>

        <Footer/>

        </>)
}