let templateRegex

export default {
  setDelimiters(pLeft, pRight) {
    templateRegex = new RegExp("%%" + "(.*?)" + "%%", "g")
  },

  // Quick and dirty template method
  quickTemplate(pTemplate, pValues) {
    if (templateRegex == null) {
      module.exports.setDelimiters("%%", "%%")
    }
    return pTemplate.replace(
      new RegExp("%%" + "(.*?)" + "%%", "g"),
      function (i, pMatch) {
        return pValues && pValues[pMatch]
      }
    )
  },
}
