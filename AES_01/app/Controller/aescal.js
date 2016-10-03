/**
 * Created by shannon_z on 2/10/16.
 */

//AES GF(2**8) multiplication
function aes_mul( a, b )
{
    var res = 0;

    while( a > 0 )
    {
        if ( (a&1) != 0 )
            res = res ^ b;		// "add" to the result
        a >>>= 1;			// shift a to get next higher-order bit
        b <<= 1;			// shift multiplier also
    }

    // reduce it modulo x**8 + x**4 + x**3 + x + 1
    var hbit = 0x10000;		// bit to test if we need to take action
    var modulus = 0x11b00;	// modulus - XOR by this to change value
    while( hbit >= 0x100 )
    {
        if ( (res & hbit) != 0 )		// if the high-order bit is set
            res ^= modulus;	// XOR with the modulus

        // prepare for the next loop
        hbit >>= 1;
        modulus >>= 1;
    }

    return res;
}

//MixColumns
function MixColumns(state)
{
    var col;
    var c0, c1, c2, c3;

    for( col=0; col<4; col++ )
    {
        c0 = state[I(0,col)];
        c1 = state[I(1,col)];
        c2 = state[I(2,col)];
        c3 = state[I(3,col)];

        // do mixing, and put back into array
        state[I(0,col)] = aes_mul(2,c0) ^ aes_mul(3,c1) ^ c2 ^ c3;
        state[I(1,col)] = c0 ^ aes_mul(2,c1) ^ aes_mul(3,c2) ^ c3;
        state[I(2,col)] = c0 ^ c1 ^ aes_mul(2,c2) ^ aes_mul(3,c3);
        state[I(3,col)] = aes_mul(3,c0) ^ c1 ^ c2 ^ aes_mul(2,c3);
    }

    return state;
}