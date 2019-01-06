import CONSTANTS from '../utils/constants';

/**
 * Gets the environment port.
 */
export const getEnvironmentPort = () => process.env.PORT || CONSTANTS.DEVELOPMENT_PORT;
