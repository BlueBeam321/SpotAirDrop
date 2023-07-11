
import { Contract } from '@ethersproject/contracts'

import { astrohABI } from '../../abis/astroh';
import { astrohContractAddress } from '../../constants/contractAddresses';

const astrohInstance = (account, chainId, library) => {

    if (chainId) {
        return new Contract(astrohContractAddress, astrohABI, library.getSigner(account));
    }
    return null
}

export {
    astrohInstance
}
