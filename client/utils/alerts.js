
export const onlyUniqueAlerts = (payload) => [...new Set(payload.filter(alert => alert.impactedRoutes.some(id => process.env.IMPACTED_SERVICES.split("|").includes(id))).map(({description}) => description))]
