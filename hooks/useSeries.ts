import { useEffect, useState } from 'react';
import API from "@/services";
import { useDebounce } from './useDebounce';
import { SerieProps } from '@/components/Serie';
import { mapSerieModelToProps } from '@/utils';

export const useSeries = () => {
    const [series, setSeries] = useState<Array<SerieProps>>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedValue = useDebounce(searchTerm, 500);

    const onChangeText = (text: string) => {
        setSearchTerm(text);
    };

    const getSeries = async (search: string) => {
        const fetchedSeries = await API.getSeries(search);
        const mappedSeries = mapSerieModelToProps(fetchedSeries);
        setSeries(mappedSeries);
    };

    useEffect(() => {
        getSeries(debouncedValue);
    }, [debouncedValue]);

    return {
        series,
        search: searchTerm,
        onChangeText
    }
}
