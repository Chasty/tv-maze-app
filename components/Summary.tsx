import React from 'react'
import RenderHtml from 'react-native-render-html';
import { MonoText } from './StyledText'
import { useWindowDimensions } from 'react-native';

type SummaryProps = {
    text: string
}

const Summary = ({ text }: SummaryProps) => {
    const { width } = useWindowDimensions();
    return (
        <RenderHtml
            contentWidth={width}
            source={{ html: text ?? 'No summary available' }}
        />
    )
}

export default Summary