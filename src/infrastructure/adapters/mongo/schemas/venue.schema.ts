import { Schema } from 'mongoose';

/**
 * Mongo Schema for Venue.
 */
export const VenueSchema = new Schema({
  id: Number,
  name: String,
  latitude: Number,
  longitude: Number,
  // schema needs to have this to accept the new field added
  location: {
    type: { type: String },
    coordinates: { type: Array },
  },
});

// activate location
VenueSchema.index({ location: '2dsphere' });
