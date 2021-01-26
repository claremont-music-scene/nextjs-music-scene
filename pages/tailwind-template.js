import CategoryAndDescriptionCard from "../components/cards/category-and-description";
import HeadlineCard from "../components/cards/headline";
import CardRowWithShadowContainer from "../components/cards/row-with-shadow-container";
import NewsCardGrid from "../components/cards/news-card-grid";
import SectionPageLayout from "../components/layouts/section-page";

export default function HomePage() {
    return (
        <SectionPageLayout>
            <CardRowWithShadowContainer>
                <CategoryAndDescriptionCard headline="First A Fox" bgColor="yellow" bgGradientFrom="cream" bgGradientTo="cream" headlineBgColor="pink-600"/>
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
        </SectionPageLayout>
    )
}