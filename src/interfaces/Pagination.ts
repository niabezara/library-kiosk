export interface PaginationContextProps {
  currentPage: number;
  seletedpage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}
