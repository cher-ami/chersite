/**
 * replaceEnvVarsLocalIp
 *
 * @param envVars
 * @param ipAddress
 * @param localIpString
 */
export const envVarsLocalIp = (envVars, ipAddress, localIpString = `{{LOCAL_IP}}`) => {
  return Object.keys(envVars).reduce((obj, key) => {
    if (!envVars?.[key] || typeof envVars?.[key] !== "string") return obj
    return { ...obj, [key]: envVars[key]?.replace(localIpString, ipAddress) }
  }, {})
}
