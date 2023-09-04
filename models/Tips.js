import {Schema, model, models} from 'mongoose';

const tipsSchema = new Schema ({
    creator: {
        type: Schema.Types.ObjectId, 
        ref: 'User',
    },

    tip: {
        type: String,
        required: [true, 'Please provide a tip'],
    },

    tag: {
        type: String,
        required: [true, 'Please provide a tag'],
    }
});

const Tip = models.Tip || model('Tip', tipsSchema); // use models.Tip to check if a model called Tip exists. If yes, use it; otherwise, create a new model called 'Tip' using the tipsSchema

export default Tip;