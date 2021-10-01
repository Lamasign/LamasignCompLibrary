import { stringOrNullValidator } from '../../src/utils/props-validator'

describe('Props Validators', () => {
  describe('stringOrNullValidator', () => {
    it('should return true if the provided value is null', () => {
      const value = stringOrNullValidator(null)
      expect(value).toBe(true)
    })
    it('should return true if the provided value is a string', () => {
      const value = stringOrNullValidator('test')
      expect(value).toBe(true)
    })
    it('should return false if the provided value is neither null nor a string', () => {
      const value = stringOrNullValidator()
      expect(value).toBe(false)
    })
  })
})
