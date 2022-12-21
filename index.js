/**
 * @file mofron-comp-boxicon/index.js
 * @brief icon for select box component
 * @license MIT
 */
const FrameImg = require('mofron-comp-frameimg');
const VrtPos   = require('mofron-effect-vrtpos');
const ConfArg  = mofron.class.ConfArg;
const comutl   = mofron.util.common;

module.exports = class extends FrameImg {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("boxicon");
            
	    /* init config */
	    this.shortForm('image');
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    initDomConts () {
        try {
            super.initDomConts();
            this.imageSize('80%');
            this.baseColor('white');
            this.borderWidth('0.05rem');
            this.size('0.7rem','0.7rem');
            
            this.effect(new VrtPos());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
