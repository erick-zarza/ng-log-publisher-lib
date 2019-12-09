import { InjectionToken } from '@angular/core';
import { LogPublisherConfig } from '../models/log-publisher-config';

/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionTToken used to import the config object, provided from the outside
 */
export const LogPublisherConfigService = new InjectionToken<LogPublisherConfig>('LogPublisherConfig');