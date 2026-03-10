import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import type { SearchHistoryItem } from "@/shared/hooks/useShowSearchState"

interface SearchHistoryProps {
  items: SearchHistoryItem[];
  onDelete: (id: number) => void;
  onSelect: (url: string) => void;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export const SearchHistory = ({ items, onDelete, onSelect }: SearchHistoryProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        mb: 2,
      }}
      component="ul"
    >
      {items.map((data) => (
        <ListItem key={data.id}>
          <Chip
            label={data.title}
            onDelete={() => onDelete(data.id)}
            onClick={() => onSelect(data.url)}
          />
        </ListItem>
      ))}
    </Paper>
  );
}
