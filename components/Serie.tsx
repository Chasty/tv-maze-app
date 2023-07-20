import { Pressable } from "react-native"
import Days from "./Days"
import Genres from "./Genres"
import Poster from "./Poster"
import SerieName from "./SerieName"
import Summary from "./Summary"
import { View } from "./Themed"
import { useRouter } from "expo-router"

export type SerieProps = {
    urlImage?: string
    name: string
    summary?: string
    schedule?: {
        time: string
        days: Array<string>
    }
    genres?: Array<string>
}

export const Serie = ({ name, urlImage, summary, schedule, genres }: SerieProps) => {
    const router = useRouter();
    return(
        <Pressable onPress={() => {
            router.push("/detail")
        }} style={{ margin: 20 }}>
            <Poster url={urlImage} />
            <SerieName name={name} />
            {summary && <Summary text={summary} />}
            {schedule && <Days schedule={schedule} />}
            {genres && <Genres genres={genres}/>}
            {/*<Seasons />*/}
        </Pressable>
    )
}