import { View, Text } from 'react-native'
import React from 'react'
import { useFigures } from '@/store/figures'

interface Props {
    amount: number;
    style?: object;
    countrySymbol?: string;
}

export default function FiguresComponent({amount, countrySymbol, style}: Props) {

    const showFigure = useFigures((state) => state.showFigures);

  return (
      <Text style={style}>{countrySymbol ? countrySymbol : "NGN"}{showFigure ? amount.toLocaleString() : "****"}</Text>
  )
}