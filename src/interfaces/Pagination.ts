export interface PaginationContextProps {
  currentPage: number;
  seletedpage: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  HandleBookPagePrev: () => void;
  HandleBookPageNext: () => void;
}
