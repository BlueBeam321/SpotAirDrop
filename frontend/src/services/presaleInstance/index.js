
import { Contract } from '@ethersproject/contracts'

import { presaleABI } from '../../abis/presale';
import { presaleContractAddress } from '../../constants/contractAddresses';

const presaleInstance = (account, chainId, library) => {

    if (chainId) {
        return new Contract(presaleContractAddress, presaleABI, library.getSigner(account));
    }
    return null
}

export {
    presaleInstance
}
