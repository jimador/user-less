/**
 * Calculate the offset for a given page number and size
 * @param pageNumber The page number (1 indexed)
 * @param pageSize The page size
 * @private
 */
import { IPageInfo } from '../domain';

const _calculateOffset = (pageNumber: number, pageSize: number): number => (pageNumber - 1) * pageSize

/**
 * Clip an array of {@link T} to a given page size at a given page number
 * @param items
 * @param pageOptions
 * @throws PaginationError if pageNumber < 0 || pageSize < 0
 */
export const getPage = <T>(items: T[], pageOptions: IPageInfo) => {
  const pageNumber = Number(pageOptions.cursor) || 1
  const pageSize = pageOptions.limit

  if (pageNumber < 1) {
    throw new Error(`Page number must be greater than 1. Number: ${pageNumber}`)
  }

  if (pageSize < 1) {
    throw new Error(`Page size must be greater than 0. Size: ${pageSize}`)
  }

  const offset = _calculateOffset(pageNumber, pageSize)
  const total = items.length

  if (offset > total) {

    return {
      items: [],
      cursor: pageNumber
    }

  } else {

    const calculatedEnd = offset + pageSize
    const actualEnd = calculatedEnd < total ? calculatedEnd : total
    return {
     items: items.slice(offset, actualEnd),
      cursor: pageNumber
    }

  }

}
