import { ScrollView, Text, TouchableOpacity } from "react-native";
import { ProductCategory } from "@/src/data/products";

import style from "./style";

type FilterProps = {
  options: ProductCategory[];
  selectedOption: ProductCategory;
  onSelectOption: (option: ProductCategory) => void;
};

const Filter = ({ options, selectedOption, onSelectOption }: FilterProps) => {
  return (
    <ScrollView
      style={style.filterContainer}
      contentContainerStyle={style.filterContent}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {options.map((option) => {
        const isSelected = option === selectedOption;

        return (
          <TouchableOpacity
            key={option}
            style={[style.filter, isSelected && style.filterSelected]}
            onPress={() => onSelectOption(option)}
            activeOpacity={0.8}
          >
            <Text
              style={[style.filterText, isSelected && style.filterTextSelected]}
              numberOfLines={1}
            >
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Filter;
