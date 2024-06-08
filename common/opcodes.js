import { has } from '~/util/has.js';

import enumerate from '~/util/enumerate.js';


const names =
[
	'OP_CREATE_OBJECT',            /*  0x00  */ 
	'OP_FUNC_DECL',                /*  0x01  */ 
	'FILLER_02',                 
	'FILLER_03',                 
	'OP_ADD_OBJECT',               /*  0x04  */
	'OP_JMPIFNOT',                 /*  0x05  */ 
	'OP_SAVEVAR_FLT',              /*  0x06  */
	'OP_SAVEVAR_STR',              /*  0x07  */ 
	'OP_SETCUROBJECT',             /*  0x08  */
	'OP_STR_TO_FLT',               /*  0x09  */ 
	'OP_STR_TO_NONE',              /*  0x0A  */
	'OP_JMPIF',                    /*  0x0B  */ 
	'OP_END_OBJECT',               /*  0x0C  */ 
	'OP_CMPLT',                    /*  0x0D  */ 
	'OP_CMPLE',                    /*  0x0E  */ 
	'OP_JMPIFFNOT',                /*  0x0F  */
	'OP_JMPIFF',                   /*  0x10  */ 
	'OP_SETCURFIELD',              /*  0x11  */ 
	'OP_SETCURFIELD_ARRAY',        /*  0x12  */ 
	'OP_JMPIF_NP',                 /*  0x13  */
	'OP_JMP',                      /*  0x14  */
	'OP_MOD',                      /*  0x15  */ 
	'OP_LOADFIELD_UINT',           /*  0x16  */ 
	'OP_STR_TO_UINT',              /*  0x17  */ 
	'OP_JMPIFNOT_NP',              /*  0x18  */
	'OP_CMPEQ',                    /*  0x19  */
	'OP_CMPGR',                    /*  0x1A  */ 
	'OP_CMPNE',                    /*  0x1B  */ 
	'FILLER_1C',               
	'FILLER_1D',               
	'FILLER_1E',               
	'OP_RETURN',                   /*  0x1F  */
	'OP_CMPGE',                    /*  0x20  */ 
	'OP_BITAND',                   /*  0x21  */ 
	'FILLER_22',                  
	'FILLER_23',                  
	'OP_SHL',                      /*  0x24  */ 
	'OP_BITOR',                    /*  0x25  */ 
	'OP_LOADVAR_FLT',              /*  0x26  */ 
	'OP_SAVEFIELD_FLT',            /*  0x27  */ 
	'OP_SAVEFIELD_STR',            /*  0x28  */ 
	'OP_LOADVAR_STR',              /*  0x29  */ 
	'OP_LOADFIELD_FLT',            /*  0x2A  */ 
	'OP_LOADFIELD_STR',            /*  0x2B  */ 
	'FILLER_2C',                 
	'OP_CALLFUNC',                 /*  0x2D  */ 
	'OP_REWIND_STR',               /*  0x2E  */
	'OP_PUSH_FRAME',               /*  0x2F  */
	'FILLER_30',                 
	'OP_SAVEVAR_UINT',             /*  0x31  */
	'OP_SUB',                      /*  0x32  */ 
	'OP_MUL',                      /*  0x33  */ 
	'OP_DIV',                      /*  0x34  */ 
	'OP_NEG',                      /*  0x35  */ 
	'OP_SETCURVAR',                /*  0x36  */
	'OP_SETCURVAR_CREATE',         /*  0x37  */
	'OP_SETCUROBJECT_NEW',         /*  0x38  */ 
	'OP_SETCURVAR_ARRAY',          /*  0x39  */ 
	'OP_NOT',                      /*  0x3A  */
	'OP_NOTF',                     /*  0x3B  */
	'OP_ADD',                      /*  0x3C  */ 
	'OP_SETCURVAR_ARRAY_CREATE',   /*  0x3D  */
	'OP_LOADVAR_UINT',             /*  0x3E  */ 
	'OP_FLT_TO_UINT',              /*  0x3F  */
	'OP_FLT_TO_STR',               /*  0x40  */ 
	'FILLER_41',                 
	'OP_ADVANCE_STR',              /*  0x42  */ 
	'OP_ADVANCE_STR_APPENDCHAR',   /*  0x43  */
	'OP_TERMINATE_REWIND_STR',     /*  0x44  */
	'OP_COMPARE_STR',              /*  0x45  */
	'OP_PUSH',                     /*  0x46  */
	'OP_ADVANCE_STR_COMMA',        /*  0x47  */
	'OP_ADVANCE_STR_NUL',          /*  0x48  */ 
	'OP_FLT_TO_NONE',              /*  0x49  */
	'OP_UINT_TO_FLT',              /*  0x4A  */
	'OP_UINT_TO_STR',              /*  0x4B  */
	'OP_UINT_TO_NONE',             /*  0x4C  */
	'OP_LOADIMMED_UINT',           /*  0x4D  */
	'OP_LOADIMMED_FLT',            /*  0x4E  */
	'OP_TAG_TO_STR',               /*  0x4F  */ 
	'OP_LOADIMMED_STR',            /*  0x50  */ 
	'OP_LOADIMMED_IDENT',          /*  0x51  */ 
	'OP_CALLFUNC_RESOLVE',         /*  0x52  */
	'FILLER_53',                 
];

const enums = enumerate (names);

/**
 * Checks if it's a non-filler opcode.
 *
 * @param   {integer} op
 * @returns {boolean}
 */
const isOpcode = op =>
{
	if ( typeof op === 'number' )
	{
		return has (names, op) && op !== enums.FILLER1 && op !== enums.FILLER2;
	}

	return has (enums, op) && op !== 'FILLER1' && op !== 'FILLER2';
};

/**
 * @param   {string[]} - opnames
 * @returns {Set}
 */
const createOpset = opnames =>
{
	const opcodes = [];

	const { length } = opnames;

	for ( let i = 0; i < length; i++ )
	{
		opcodes.push (enums[opnames[i]]);
	}

	return Object.freeze (new Set (opcodes));
};


export
{
	enums,
	names,

	isOpcode,
	createOpset,
};
