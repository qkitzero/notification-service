import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { NotificationService } from './notification.service';
import { Metadata, type ServerUnaryCall } from '@grpc/grpc-js';
import {
  CreateNotificationRequest,
  CreateNotificationResponse,
} from 'gen/notification/v1/notification';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @GrpcMethod('NotificationService', 'CreateNotification')
  create(
    data: CreateNotificationRequest,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): CreateNotificationResponse {
    return {};
  }
}
